# SCS2b.2 — Cloud Deploy Record

**Date:** 11 November 2026

## 1. My GitHub address and record

| What | My details |
|---|---|
| My GitHub address | https://wuoialierriak-835.github.io/client-nugu-site/ |
| The record | wuoialierriak-835.github.io → GitHub's servers |
| My site repo | ~/scs/projects/client-nugu-site |
| My handle (Linux user name) | wuoi |
| My GitHub user | wuoialierriak-835 |
| Client slug | client-nugu |
| My repository | client-nugu-site |
| TTL of my record | 3600 seconds |
| Commit live on my GitHub address | PENDING — live commit not independently verified |
| My GitHub address, as shown in Pages | https://wuoialierriak-835.github.io/client-nugu-site/ |

## 2. The deployment steps

| # | What I did | What I expected | What I saw | Setting |
|---|---|---|---|---|
| 1 | Viewed the repository and checked items 1–3 | Only site files and clean history | PENDING — stranger test evidence needed | GitHub |
| 2 | Opened GitHub Settings → Pages | "Your site is live at" and my address | GitHub confirmed the site was live at https://wuoialierriak-835.github.io/client-nugu-site/. | Pages |
| 3 | Ran git pull | Already up to date | PENDING — command not yet recorded | Git |
| 4 | Ran dig for my GitHub hostname | Four A records with IP addresses | Four A records returned. TTL was 3600 seconds. | DNS |
| 5 | Read the record to my partner | My hostname, TTL and the addresses it carries | PENDING — partner confirmation not yet recorded | DNS |
| 6 | Queried two external DNS resolvers | Both show the same record | Cloudflare (1.1.1.1) and Google (8.8.8.8) returned the same four IP addresses. TTL: 3600 seconds. | DNS |
| 7 | Opened my website and contact page in a browser | Website loads, HTTPS and padlock visible | Website loaded correctly. Padlock visible. Contact page: https://wuoialierriak-835.github.io/client-nugu-site/contact.html | Browser |
| 8 | Checked Enforce HTTPS in Pages settings | Enforce HTTPS enabled and padlock visible | Enforce HTTPS was ticked. | Pages |
| 9 | Tested the site on a phone off Wi-Fi | Site, padlock and full address visible | PENDING — phone screenshot required | Browser |
| 10 | Pushed a real change | Change visible on my GitHub address | PENDING — live change not yet verified | Git |

### DNS evidence

Hostname: wuoialierriak-835.github.io

TTL: 3600 seconds

Resolver 1: 1.1.1.1 (Cloudflare)
Resolver 2: 8.8.8.8 (Google)

Four A records returned:

- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

Both external resolvers returned the same four addresses.
DNS status: NOERROR.

No DNS record was created or changed.

## 3. CloudFront lab — bucket policy analysis

| Field | What it says | What it allows (my words) | Right for a website? Why |
|---|---|---|---|
| Effect | PENDING — actual policy needed | PENDING | PENDING |
| Principal | PENDING — actual policy needed | PENDING | PENDING |
| Action | PENDING — actual policy needed | PENDING | PENDING |
| Resource | PENDING — actual policy needed | PENDING | PENDING |
| Condition | PENDING — actual policy needed | PENDING | PENDING |

### What I asked the tool, and which lab's policy
PENDING — actual CloudFront lab evidence needed.

### What I struck and why (the receipt)
PENDING — record the actual change or removal and reason from the lab.

### What the check from outside showed
PENDING — actual external check and result needed.
