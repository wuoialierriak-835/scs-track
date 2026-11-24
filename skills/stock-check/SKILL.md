---
name: stock-check
description: Weekly hardware shop stock reorder verification and test check before sending supplier messages.
---

# Weekly Stock Check (`stock-check`)

## When to use
Use every week after downloading the shop's stock sheet to `workspace/stock-tools/stock-export.csv` and before sending WhatsApp or SMS reorder messages to suppliers.

## Steps
1. Verify no secrets are tracked in `workspace/stock-tools/` using `git grep -n "SMS_API_KEY" workspace/stock-tools/`.
2. Run the unit test suite: `node --test workspace/stock-tools/reorder.test.js`.
3. Run the reorder preview: `node workspace/stock-tools/reorder.js workspace/stock-tools/stock-export.csv`.
4. Count the rows in `workspace/stock-tools/stock-export.csv` at or below `Reorder at` by hand and compare against the printed output.
5. Run a dry-run SMS check with a dummy key: `SMS_API_KEY=dryrun-test node workspace/stock-tools/send-sms.js workspace/stock-tools/stock-export.csv --dry-run`.

## How you know it worked
All tests in `reorder.test.js` pass (`0` failures), every item at or below `Reorder at` appears grouped by supplier with no mangled apostrophes, and `--dry-run` prints the target URL without exposing a real key.

Ran: 2026-11-24 — `node --test workspace/stock-tools/reorder.test.js` passed (6/6 tests) and `reorder.js` output verified against `stock-export.csv`.
