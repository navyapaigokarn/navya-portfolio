"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/lib/profile";

type Field = "name" | "email" | "message" | "form";
type Errors = Partial<Record<Field, string>>;

const inputClass =
  "w-full border border-line bg-card px-3 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-copper";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [pending, setPending] = useState(false);
  const [mailto, setMailto] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setReady(false);
    setMailto(null);
    setErrors({});

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
      company: String(form.get("company") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as {
        errors?: Errors;
        mailto?: string | null;
      };

      if (!response.ok) {
        setErrors(data.errors ?? { form: "Could not check that note." });
        return;
      }

      setMailto(data.mailto ?? null);
      setReady(true);
    } catch {
      setErrors({
        form: `The server did not respond. Email ${profile.email} directly.`,
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          Name
          <input
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={80}
            className={inputClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <span id="name-error" className="text-copper">
              {errors.name}
            </span>
          ) : null}
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={120}
            className={inputClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <span id="email-error" className="text-copper">
              {errors.email}
            </span>
          ) : null}
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm">
        Note
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={6}
          placeholder="What you would like to talk about"
          className={inputClass}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <span id="message-error" className="text-copper">
            {errors.message}
          </span>
        ) : null}
      </label>

      <input
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {errors.form ? (
        <p className="text-sm text-copper" role="alert">
          {errors.form}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={pending}
          className="shrink-0 whitespace-nowrap border border-ink bg-ink px-5 py-3 text-sm text-paper transition-colors hover:border-copper hover:bg-copper disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Checking…" : "Prepare email"}
        </button>
        <p className="text-sm text-muted">
          Checked on the server, then opened in your email app. Nothing is stored.
        </p>
      </div>

      {ready ? (
        <div className="border border-line bg-card px-4 py-4" role="status">
          {mailto ? (
            <>
              <p className="text-sm">
                The note is ready. Open it in your email app to send it to Navya.
              </p>
              <a
                href={mailto}
                className="mt-3 inline-block border border-copper px-4 py-2 text-sm text-copper"
              >
                Open email
              </a>
            </>
          ) : (
            <p className="text-sm">Thanks.</p>
          )}
        </div>
      ) : null}
    </form>
  );
}
