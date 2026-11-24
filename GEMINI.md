# Repository Rules -- scs-track

## Stack
Node.js (`v22.22.1`) CLI tools in `workspace/stock-tools/` (zero external npm packages) and Google Apps Script (`V8` runtime) in `workspace/automation/`.

## Tests
`node --test workspace/stock-tools/reorder.test.js`

## Never
- Never hardcode API keys, tokens, or secrets in code or commit `.env` files (`process.env.SMS_API_KEY` only).
- Never paste real client names, phone numbers, staff records, or live credentials into an AI tool or public repository.
- Never rewrite an entire file when a single-function patch was requested, and never use `<` when the spec says "at or below" (`<=`).
- Never import unverified or non-existent functions like `fetchWithRetry` from built-in Node modules without checking the docs.

## Skills
- `skills/stock-check/SKILL.md` — weekly hardware shop stock reorder verification and test check before sending supplier messages.
