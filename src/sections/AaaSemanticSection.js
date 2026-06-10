import React from 'react';

// AAA semantic checks (level AAA only, runs HAIP / Bedrock LLM):
//   - 2.4.9 Link Purpose (Link Only) — handled by LinksSection
//   - 2.4.10 Section Headings — handled by HeadingsSection
//   - 3.1.3 Unusual Words — jargon below
//   - 3.1.4 Abbreviations — undefined abbreviations
//   - 3.1.5 Reading Level — dense, complex prose
//   - 3.3.5 Help — form below has no contextual help
export function AaaSemanticSection() {
  return (
    <section aria-labelledby="aaa-heading">
      <h2 id="aaa-heading">AAA semantic content</h2>

      {/* 3.1.3 Unusual Words — idioms / domain-specific jargon used without
          definition. Multiple distinct unusual terms maximize the chance
          the LLM flags this. */}
      <p>
        Our flagship offering is genuinely <em>sui generis</em> — a
        Hobson's choice for the discerning architect, eschewing the
        <em>schadenfreude</em>-laden anti-patterns endemic to legacy
        deployments. Customers find our <em>zeitgeist</em>-defining
        approach to be the <em>sine qua non</em> of intelligent content
        services, rendering competing solutions <em>persona non grata</em>
        in any thoughtful procurement conversation.
      </p>

      {/* 3.1.4 Abbreviations — undefined initialisms, no <abbr> markup. */}
      <p>
        Our platform supports OCR, ICR, ECM, RPA, BPM, ETL, EDI, ERP,
        CRM, DXP, RAG, LLM, SAML, OIDC, SCIM, MFA, SSO, LDAP, AD, JWT,
        SAML, MTLS, SLA, KPI, ROI, TCO, FedRAMP, HIPAA, SOC2, GDPR, CCPA,
        and PII. None of these are spelled out anywhere on the page.
      </p>

      {/* 3.1.5 Reading Level — heavily subordinated, jargon-laden,
          long-sentence prose well above lower-secondary level. */}
      <p>
        The aforementioned ontologically-grounded, microservice-oriented
        architectural paradigm — instantiated as a horizontally
        scalable, polyglot-persistence-backed federation of bounded
        contexts whose interaction surface area is enumerated through
        contract-first OpenAPI specifications and whose authorization
        boundary is enforced via cryptographically-attested mutual TLS —
        engenders a non-trivially heterogeneous deployment topology that
        nevertheless evinces a remarkably consistent operational gestalt
        when subjected to load-bearing traffic regimes consistent with
        the upper percentile of enterprise-scale ingestion workloads, a
        property attributable in no small part to the deliberate
        cultivation of idempotent transactional semantics throughout the
        write path and the concomitant elimination of impedance mismatch
        between the durable representation and the in-memory domain
        model. Furthermore, the platform's commitment to deterministic,
        replayable event streams — combined with a dual-write
        avoidance strategy predicated on outbox-pattern-mediated
        eventual consistency between the source-of-truth relational
        store and the downstream event log — yields a system whose
        observability profile is uncharacteristically tractable
        relative to the topological complexity inherent in its
        decomposition strategy.
      </p>

      {/* 3.3.5 Help — form with required fields and no contextual help.
          Use textareas / inputs that are accessible (no a11y violations
          here on purpose) so the LLM flags the missing-help case cleanly. */}
      <form aria-labelledby="aaa-form-heading" onSubmit={(e) => e.preventDefault()}>
        <h3 id="aaa-form-heading">Submit a support ticket (no help text)</h3>

        <label htmlFor="aaa-ticket-id">Ticket reference</label>
        <input id="aaa-ticket-id" type="text" required />

        <label htmlFor="aaa-ticket-account">Account number</label>
        <input id="aaa-ticket-account" type="text" required />

        <label htmlFor="aaa-ticket-summary">Summary</label>
        <textarea id="aaa-ticket-summary" required />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
