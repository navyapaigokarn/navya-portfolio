import { NextResponse } from "next/server";
import { profile } from "@/lib/profile";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WINDOW_MS = 60_000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

type Payload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "local";
}

function isLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > MAX_HITS;
}

export async function POST(request: Request) {
  if (isLimited(clientKey(request))) {
    return NextResponse.json(
      { errors: { form: "Too many notes in a short time. Email Navya directly." } },
      { status: 429 },
    );
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { errors: { form: "That message could not be read." } },
      { status: 400 },
    );
  }

  if (typeof body.company === "string" && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true, mailto: null });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const errors: Record<string, string> = {};

  if (name.length < 2 || name.length > 80) {
    errors.name = "Use a name between 2 and 80 characters.";
  }
  if (!EMAIL.test(email) || email.length > 120) {
    errors.email = "Enter a valid email address.";
  }
  if (message.length < 10 || message.length > 2000) {
    errors.message = "Write between 10 and 2000 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const subject = encodeURIComponent(`Portfolio note from ${name}`);
  const mailBody = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
  const mailto = `mailto:${profile.email}?subject=${subject}&body=${mailBody}`;

  return NextResponse.json({ ok: true, mailto });
}
