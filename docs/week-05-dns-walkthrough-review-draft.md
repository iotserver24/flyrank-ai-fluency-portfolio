# Week 5: Personal Website and DNS Walkthrough — Review Draft

> **Participant review required:** This is a technically sourced draft about the real GitHub Pages portfolio. It is not a substitute for the participant’s own words, a logged-out private-window check, linking the site from personal LinkedIn/CV records, or a future official FlyRank badge. Those actions remain unclaimed.

## Current live site

The portfolio is currently served from the free GitHub Pages URL:

```text
https://iotserver24.github.io/flyrank-ai-fluency-portfolio/
```

A direct HTTPS availability audit on 2026-08-24 returned `200` for that URL. The site is built from the public Nuxt source in the `flyrank-ai-fluency-portfolio` repository and deployed by the committed GitHub Actions Pages workflow.

## DNS in plain language

DNS is the internet’s address book. People remember names such as `example.com`; browsers need a network address to contact the computer that can answer for that site. DNS translates the human-readable name into the information a browser needs to make that connection.[^dns]

When someone types a new domain into a browser, the browser first checks whether it already knows the answer from a cache. If not, it asks a recursive resolver, usually provided by the device, network, or internet provider. The resolver can ask a root nameserver which server knows about the top-level domain, then ask that top-level-domain nameserver which authoritative nameserver holds the record for the specific domain. The authoritative nameserver returns the requested record. The resolver sends the answer back to the browser, and the browser can then make an HTTPS request to the web host. Caches can make later lookups faster, but they can also make recent DNS or domain changes take time to appear everywhere.[^dns]

For this portfolio’s current default GitHub Pages address, GitHub manages the hosting path. No custom domain has been configured for the assignment. The earlier account-level `anisurge.me` custom-domain binding was removed after explicit confirmation because it redirected externally and did not support HTTPS correctly. The normal GitHub Pages address now serves the portfolio.

## What a CNAME record does

A CNAME record makes one domain name an alias of another domain name. It points to a hostname, not directly to an IP address. For example, a `portfolio.example.com` name could point to a hosting provider’s designated hostname. The DNS system then follows that alias to find the final address information.[^cname]

This is useful when a hosting provider changes its infrastructure: the site owner can point a subdomain at the provider’s hostname instead of maintaining a direct IP address. There are restrictions: a DNS name used as a CNAME should not also carry unrelated record types with the same name. If I later buy a custom domain, I would follow the provider’s current instructions, add the exact record at the domain’s DNS provider, wait for propagation, confirm HTTPS, and keep the Pages/host configuration aligned with the public hostname.

## What happens after someone enters a website address

```text
Visitor enters a hostname
  → browser/cache checks for a remembered DNS result
  → recursive resolver asks root and top-level-domain nameservers if needed
  → authoritative nameserver returns the domain’s record
  → resolver returns the address information to the browser
  → browser opens HTTPS connection to the host
  → host returns the portfolio files for the browser to render
```

## Remaining personal launch steps

- [ ] Open the live URL in a normal logged-out/private browser window and retain genuine evidence.
- [ ] Add the live URL to the participant’s LinkedIn and CV after personally reviewing the page; these are personal-profile actions and are not performed here.
- [ ] Add a booking link only after selecting a real booking service and availability policy.
- [ ] Add an official FlyRank completion badge only after FlyRank approves the capstone and provides the badge asset.

[^dns]: [Cloudflare Learning, “What is DNS?”](https://www.cloudflare.com/learning/dns/what-is-dns/), accessed 2026-08-24.
[^cname]: [Cloudflare Learning, “What is a DNS CNAME record?”](https://www.cloudflare.com/learning/dns/dns-records/dns-cname-record/), accessed 2026-08-24.
