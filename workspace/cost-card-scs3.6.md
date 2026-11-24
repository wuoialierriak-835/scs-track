# Cost Card -- SCS3.6

Every AI use today, costed on a paid tier.  A figure from the tool's usage page is evidence; an
estimate says it is one.  Write dates as YYYY-MM-DD.

Tool and tier: Gemini (free web tier; benchmarked against Gemini 2.5 Flash paid API tier for client pricing)
Price, from the tier's own page, with the date read: $0.15 per 1M input tokens (~19.35 KSh) and $0.60 per 1M output tokens (~77.40 KSh) at 1 USD = 129 KSh, read from ai.google.dev/pricing on 2026-11-24

| Use today | Tokens in | Tokens out | Where the figure came from (usage page or estimate) | Cost (KSh) |
|---|---|---|---|---|
| The patch prompt(s) | 49 | 60 | estimate (~4 chars/token on 193-char prompt; free web tier shows no usage page) | 0.01 KSh (0 KSh billed on free tier) |
| The agent run | 1,100 | 280 | estimate (free web tier shows no usage page) | 0.04 KSh (0 KSh billed on free tier) |
| Anything else | 600 | 200 | estimate (audit and rules review prompts) | 0.03 KSh (0 KSh billed on free tier) |
| Day total | 1,749 | 540 | estimate | 0.08 KSh (0 KSh billed today) |

Where the cost goes (the rates sheet line, or my own pocket, and for how long): Covered out of my own pocket during build/training on the free tier; for ongoing client automations, metered API usage goes on the client's monthly maintenance line item on the rates sheet with a hard spend cap.
If the skill or the agent job ran every week for the client, a month would cost: ~0.16 KSh/month (~4 weekly runs at ~0.04 KSh per run on Gemini Flash API pricing, or 0 KSh/month if run locally via the deterministic `stock-check` script without LLM calls).
