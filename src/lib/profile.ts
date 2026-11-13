export const profile = {
  name: "Navya Manohar Pai",
  givenName: "Navya",
  role: "Software Engineer",
  location: "Bengaluru, Karnataka, India",
  email: "navyapaigokarn@gmail.com",
  phone: "+91 6360177088",
  phoneHref: "tel:+916360177088",
  linkedin: "https://www.linkedin.com/in/navya-pai-400a32271",
  linkedinLabel: "linkedin.com/in/navya-pai",
  summary:
    "Software engineer with about 1.5 years at Oracle and an internship at Target. At Oracle I worked on Documaker, using Java 21, Oracle Database, and WebLogic to trace customer-impacting issues from logs through a validated fix. At Target I built a full-stack app to test a Microsoft multi-agent customer-service chatbot, including load tests of up to 1 million concurrent transactions.",
  languages: ["English", "Kannada", "Konkani", "Hindi"],
  learning: ["AWS", "Kubernetes", "TypeScript", "AI / GenAI"],
  highlights: [
    { value: "1.5+ yrs", label: "Oracle and Target" },
    { value: "1M", label: "Concurrent transactions in load tests" },
    { value: "8.65", label: "CGPA, PES University" },
    { value: "350+", label: "Competitive coding problems" },
  ],
} as const;

export const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const experience = [
  {
    role: "Application Software Engineer 1",
    org: "Oracle",
    place: "Bengaluru, India",
    dates: "Jul 2025 — Sep 2026",
    points: [
      "Worked on Oracle Documaker, an enterprise document-generation platform, using Java 21, Oracle Database and SQL, WebLogic Server, application logs, and configuration files to investigate customer-impacting issues.",
      "Performed root-cause analysis, issue replication, debugging, log and trace analysis, and defect investigation, including Oracle Database issues such as table locks.",
      "Troubleshot applications in clustered environments across multiple remote machines, tracing how requests, services, and errors move between layers.",
      "Investigated 32-bit and 64-bit compatibility and data-type differences that affected application and document-archive behavior.",
      "Analyzed RTF document placement and formatting against configuration settings, and debugged AFP and PostScript rendering, TLS, ECDHE cipher suites, and Java 21 runtime issues.",
      "Debugged Java with Visual Studio Code and JDeveloper using stack traces, breakpoints, and execution traces across methods and components.",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "Target Corporation",
    place: "Bengaluru, India",
    dates: "Feb 2025 — Jun 2025",
    points: [
      "Built frontend and backend pieces of an application that tests and analyzes an automated customer-service chatbot on a Microsoft multi-agent framework, with the Target NXT Customer Service team.",
      "Added access to previous customer transactions so the team could find chatbot issues and check system behavior before production releases.",
      "Monitored application and model behavior in Grafana, and ran automated load and performance tests with Locust, simulating up to 1 million concurrent transactions.",
    ],
  },
] as const;

export const projects = [
  {
    title: "Automated Math Grading System",
    kind: "Capstone",
    summary:
      "Full-stack web app that uses machine learning and agentic AI to grade math answers. The React frontend calls REST APIs on a Spring Boot backend.",
    stack: [
      "React.js",
      "Agentic AI",
      "GenAI",
      "Java",
      "Spring Boot",
      "OAuth",
      "REST",
      "MySQL",
    ],
    featured: true,
  },
  {
    title: "Microservices Communication using RabbitMQ",
    kind: "Services",
    summary:
      "A microservices project where services communicate through RabbitMQ.",
    stack: ["Python", "Flask", "RabbitMQ", "MySQL", "Docker"],
    featured: false,
  },
  {
    title: "Tours & Travel Management System",
    kind: "Application",
    summary:
      "A tours and travel management system built around object-oriented design.",
    stack: ["Java", "Spring Boot", "MySQL", "OOP"],
    featured: false,
  },
] as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["C++", "Java", "SQL", "Python", "JavaScript"],
  },
  {
    label: "Backend",
    items: [
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "Streamlit",
      "Apache Tomcat",
    ],
  },
  {
    label: "Data & platforms",
    items: [
      "Oracle Database",
      "PL/SQL",
      "MS SQL",
      "Oracle WebLogic",
      "Oracle Documaker",
    ],
  },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    label: "AI",
    items: [
      "Generative AI",
      "Agentic AI",
      "RAG",
      "LangChain",
      "Microsoft multi-agent framework",
    ],
  },
  {
    label: "Testing & delivery",
    items: [
      "JUnit",
      "Locust",
      "Grafana",
      "Docker",
      "Kubernetes",
      "Apache Kafka",
      "Jenkins",
      "Git",
    ],
  },
] as const;

export const education = [
  {
    school: "PES University, Bengaluru",
    detail: "B.Tech in Computer Science and Engineering",
    meta: "CGPA 8.65",
    dates: "Oct 2021 — Aug 2025",
  },
  {
    school: "Dr. A.V. Baliga Arts & Science College, Kumta",
    detail: "Pre-university education",
    meta: "99.66%",
    dates: "Jun 2019 — Jun 2021",
  },
  {
    school: "MEMHS, Gokarna",
    detail: "Grade I–X",
    meta: "97.66%",
    dates: "Through May 2019",
  },
] as const;

export const certifications = [
  "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
  "Oracle AI Database Certified Foundations Associate",
  "Agentic AI Certified Foundations Associate",
] as const;

export const achievements = [
  "Kodikon Hackathon — top 40 of 800+ students",
  "ISFCR Capture the Flag — top 75 of 400+ students",
  "350+ competitive coding problems solved",
  "Oracle GTP Masterclass winner",
] as const;
