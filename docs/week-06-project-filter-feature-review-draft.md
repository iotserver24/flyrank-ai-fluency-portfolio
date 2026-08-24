# Week 6: Make It Do Something — Project Filter Review Draft

> **Participant review required:** This draft describes a real feature in the published portfolio source. It does not prove that the participant wrote the explanation in their own words or personally observed the live interaction. The participant should operate the filter, revise the explanation, and capture their own evidence before claiming full assignment completion.

## Exactly one feature

The portfolio has one small dynamic feature: **filter the selected projects by All, Backend, or Workflow**. It is intentionally limited to one interaction. A visitor presses one of the filter buttons and the project list changes without reloading the page.

## Plain-words explanation

A backend is a program that runs away from the visitor’s browser. It is useful when a website needs to store information, receive messages, use private credentials, or let different users share data.

This filter does not need a backend. The list of five projects is already part of the page source. When someone presses a filter button, the browser changes the page’s current filter value. Vue then recomputes which of the already-loaded projects should be visible and redraws that part of the page. No contact details, messages, or visitor data are sent anywhere.

The data flow is:

```text
Visitor presses “Backend”
  → browser sets activeFilter to "backend"
  → visibleProjects keeps only matching local project entries
  → Vue updates the displayed project cards
```

## Free-tier live hosting evidence

The static Nuxt portfolio is deployed through a GitHub Pages Actions workflow. After the previous account-level custom-domain binding was removed, a direct HTTPS request on 2026-08-24 returned `200` for:

```text
https://iotserver24.github.io/flyrank-ai-fluency-portfolio/
```

This proves that the public static page was being served by GitHub Pages at the time of the check. It does not replace participant-operated browser evidence or a first-person explanation.

## Evidence still required from the participant

- [ ] Open the live portfolio in a normal browser after any stale redirects clear.
- [ ] Press **Backend** and **Workflow**, confirm the card list changes, and take a genuine screenshot or screen recording.
- [ ] Rewrite the plain-words explanation in the participant’s own words.
- [ ] If submitting to FLYRANK, use the live URL plus that genuine interaction evidence; do not claim a contact form or data collection feature that does not exist.
