<script setup lang="ts">
const activeFilter = ref<"all" | "backend" | "workflow">("all");
const copied = ref(false);

const projects = [
  {
    title: "Usage Metering & Billing Engine",
    category: "backend",
    detail:
      "Tenant-scoped, idempotent metering with integer microcent pricing, quotas, signed webhook fixtures, and a retried reconciliation worker.",
    link: "https://github.com/iotserver24/flyrank-capstone-metering-billing",
    proof: "9 deterministic tests plus local API and Inngest evidence; no real Stripe Checkout or provider webhook is claimed."
  },
  {
    title: "Structured LLM Triage API",
    category: "backend",
    detail:
      "A schema-validated support-triage endpoint with prompt versioning, retry controls, quarantine handling, and deterministic evaluation cases.",
    link: "https://github.com/iotserver24/flyrank-be-07-llm",
    proof: "9 deterministic tests; provider calls are intentionally not claimed without private credentials."
  },
  {
    title: "SQL-to-PDF Reporting Pipeline",
    category: "backend",
    detail:
      "A SQLite aggregation workflow that renders an idempotent A4 report from seeded application data.",
    link: "https://github.com/iotserver24/flyrank-be-08-pdf-reports",
    proof: "4 tests and a locally generated eight-page report."
  },
  {
    title: "Decision Desk Workflow",
    category: "workflow",
    detail:
      "A React Flow decision-workflow interface with local persistence and a deliberate boundary between deterministic and provider-backed execution.",
    link: "https://github.com/iotserver24/flyrank-be09-decision-flow",
    proof: "5 tests and a managed WebDev checkpoint; provider execution is documented as a boundary."
  },
  {
    title: "Background Report Job",
    category: "workflow",
    detail:
      "An Express and Inngest report job with fast acceptance, observable status transitions, controlled failure handling, and retry evidence.",
    link: "https://github.com/iotserver24/flyrank-be-06-background-job",
    proof: "7 tests and a verified local asynchronous lifecycle."
  }
];

const visibleProjects = computed(() =>
  activeFilter.value === "all"
    ? projects
    : projects.filter((project) => project.category === activeFilter.value)
);

async function copyPortfolioUrl() {
  await navigator.clipboard?.writeText(window.location.href);
  copied.value = true;
  window.setTimeout(() => (copied.value = false), 1800);
}
</script>

<template>
  <main>
    <header class="site-header">
      <a class="brand" href="#top" aria-label="Anish Kumar portfolio home">
        <span aria-hidden="true">AK</span>
        <span>ANISH KUMAR</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#approach">Approach</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <section id="top" class="hero" aria-labelledby="hero-title">
      <p class="eyebrow">Backend AI Engineering · Karkala, Karnataka</p>
      <h1 id="hero-title">I build small, testable systems that make AI work accountable.</h1>
      <div class="hero-grid">
        <p class="lede">
          This portfolio is for an engineering lead or early-stage technical team looking for someone who can turn an ambiguous AI-backend problem into an explicit, observable implementation.
        </p>
        <aside class="proof-card" aria-label="Portfolio proof statement">
          <span>PROOF STATEMENT</span>
          <p>Review a working repository, not a promise. Every project links to its implementation and records its verified boundaries.</p>
        </aside>
      </div>
      <div class="hero-actions">
        <a class="button button-primary" href="#work">Review selected work <span aria-hidden="true">↓</span></a>
        <a class="button button-quiet" href="https://github.com/iotserver24" target="_blank" rel="noreferrer">Open GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </section>

    <section id="work" class="work-section" aria-labelledby="work-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Selected systems</p>
          <h2 id="work-title">Work that leaves a trail.</h2>
        </div>
        <div class="filters" aria-label="Filter selected work">
          <button :class="{ active: activeFilter === 'all' }" @click="activeFilter = 'all'">All <span>05</span></button>
          <button :class="{ active: activeFilter === 'backend' }" @click="activeFilter = 'backend'">Backend <span>03</span></button>
          <button :class="{ active: activeFilter === 'workflow' }" @click="activeFilter = 'workflow'">Workflow <span>02</span></button>
        </div>
      </div>

      <div class="project-list" aria-live="polite">
        <article v-for="(project, index) in visibleProjects" :key="project.title" class="project-card">
          <div class="project-index">0{{ index + 1 }}</div>
          <div>
            <p class="project-type">{{ project.category }}</p>
            <h3>{{ project.title }}</h3>
            <p>{{ project.detail }}</p>
          </div>
          <div class="project-proof">
            <p>{{ project.proof }}</p>
            <a :href="project.link" target="_blank" rel="noreferrer">Repository <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      </div>
    </section>

    <section id="approach" class="approach-section" aria-labelledby="approach-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Working principle</p>
          <h2 id="approach-title">Make the boundary visible.</h2>
        </div>
        <p class="section-note">The useful part of an AI system is not only what it can do; it is what it can prove, retry, reject, and explain when something goes wrong.</p>
      </div>
      <ol class="principles">
        <li><span>01</span><strong>Start with a narrow contract.</strong><p>Define inputs, outputs, constraints, and failure states before adding model or provider complexity.</p></li>
        <li><span>02</span><strong>Test the uncomfortable path.</strong><p>Quota boundaries, retries, idempotency, malformed input, and missing configuration deserve first-class checks.</p></li>
        <li><span>03</span><strong>Document what was not run.</strong><p>A local fixture, an adapter, and a real provider session are different kinds of evidence. They should not be blurred together.</p></li>
      </ol>
    </section>

    <section id="contact" class="contact-section" aria-labelledby="contact-title">
      <p class="eyebrow">Next step</p>
      <h2 id="contact-title">Start with the code.</h2>
      <p>Open a repository, read the test and evidence notes, then decide whether the engineering approach fits your team.</p>
      <div class="contact-actions">
        <a class="button button-primary" href="https://github.com/iotserver24" target="_blank" rel="noreferrer">Visit GitHub <span aria-hidden="true">↗</span></a>
        <button class="button button-quiet" type="button" @click="copyPortfolioUrl">{{ copied ? 'Portfolio URL copied' : 'Copy portfolio URL' }}</button>
      </div>
    </section>

    <footer>
      <span>© {{ new Date().getFullYear() }} Anish Kumar</span>
      <span>Built with Nuxt · Static by design</span>
    </footer>
  </main>
</template>
