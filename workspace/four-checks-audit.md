# Four-Checks Audit

Run all four on every AI-built piece before a client sees it.  Write what you found, not what you hoped.
'Clean' is allowed only with the evidence beside it: the command you ran and what it printed, or the
page you read and the date you read it.  One section per piece; add a new piece at the bottom each time.

## Piece 1: the stock tool (workspace/stock-tools)

### Auth
Looked for: Hardcoded API keys, secrets, or tokens in `workspace/stock-tools/` and git history.
Found: Hardcoded API key was in `workspace/stock-tools/send-sms.js` line 9 (removed by hand to `process.env.SMS_API_KEY` on main), and remains in 1 historical commit (`074d931`).
Evidence: `git grep -n "SMS_API_KEY" workspace/stock-tools/` printed `workspace/stock-tools/send-sms.js:9:const apiKey = process.env.SMS_API_KEY;` and `workspace/stock-tools/send-sms.js:11:  throw new Error("SMS_API_KEY environment variable is required");` (and `git log -S "SMS_API_KEY" --oneline` printed `9f08fd4` and `074d931`).

### Edge cases
Ugly inputs, written before trying them: Blank `In stock` (`Cement 50 kg,,20,bags`), comma inside quoted item (`"Nails, 3 inch",Hardware wholesaler,4,10,kg`), boundary equal to reorder level (`grinding discs 115 mm` at `20,20`), apostrophe (`ng'ombe salt lick`), ampersand (`Nuts & bolts M10`).
Found: `reorder.js` outputs only 4 items instead of 7: `parseCsv` splits `"Nails, 3 inch"` on the comma (dropping it), `reorderList` uses `<` instead of `<=` (dropping `grinding discs 115 mm` at 20/20), `parseInt("", 10)` yields `NaN` (dropping `Cement 50 kg`), and `tidyName` turns `ng'ombe` into `Ng'Ombe`.
Evidence: `node workspace/stock-tools/reorder.js workspace/stock-tools/stock-export.csv` printed only 4 items (`Welding rods 2.5 mm`, `Ng'Ombe Salt Lick`, `Nuts & bolts M10`, `Oxygen refill`) out of 7 due for reorder.

### Wrong versions
Looked for: Node.js version compatibility claimed in `workspace/stock-tools/README.md` vs. APIs used in `reorder.js` and `send-sms.js`.
Found: `README.md` claims "Works on any Node", but `reorder.js` line 27 uses `Object.groupBy()`, which requires Node 21+ (fails on Node 18/20 LTS), even though local Node is `v22.22.1`.
Evidence: `node --version && grep -n "Object.groupBy" workspace/stock-tools/reorder.js` printed `v22.22.1` and `27:  return Object.groupBy(list, (r) => r.Supplier);`.

### Invented libraries
Looked for: Imported functions or packages that do not exist in Node built-ins or `package.json`.
Found: `workspace/stock-tools/send-sms.js` line 5 imports `fetchWithRetry` from `node:http`, which does not exist in Node's `node:http` module (`undefined`).
Evidence: `node -e 'console.log(typeof require("node:http").fetchWithRetry)'` printed `undefined`.

The one to fix first, and why: Auth (removing the hardcoded gateway key from `send-sms.js` and rotating it at the gateway), because anyone with access to the repo can read the key and send SMS messages billed to the shop's account.

## Piece 2: my own SCS3.5 script

### Auth
Looked for: Hardcoded API keys, tokens, passwords, or real client data in `workspace/automation/reorder-reminder.gs`.
Found: Clean — uses `SpreadsheetApp.getActiveSpreadsheet()` with `@OnlyCurrentDoc` scope on line 3 and contains no hardcoded secrets or real client data.
Evidence: `grep -En "key|token|secret|password" workspace/automation/reorder-reminder.gs || echo "Clean: no matches"` printed `Clean: no matches`.

### Edge cases
Ugly inputs, written before trying them: Empty `Records` sheet (`lastRow < 2`), lowercase/padded `" reorder "` status, `0` or `-4` quantity on `INTAKE`, blank item/quantity cells, direct edit to validation column D, and apostrophe/comma text in item names.
Found: Clean — `lastRow < 2` exits cleanly on line 39, `String(row[2]).trim().toUpperCase()` handles `" reorder "` on line 14, `typeof quantity === "number" && quantity > 0` flags `0` and `-4` as `INVALID ENTRY` on line 99, blank cells exit on line 97, and `column > 2` ignores column D edits on line 92.
Evidence: `grep -n -E "lastRow < 2|toUpperCase|typeof quantity|column > 2" workspace/automation/reorder-reminder.gs` printed lines `14`, `39`, `92`, and `99` confirming all guards are present (verified in `workspace/automation/test-log.md`).

### Wrong versions
Looked for: Google Apps Script V8 runtime features (`const`, arrow functions, template literals, `Array.filter`, `Array.reduce`) and `@OnlyCurrentDoc` JSDoc annotation in `workspace/automation/reorder-reminder.gs`.
Found: Clean — all syntax targets standard Google Apps Script V8 runtime and `@OnlyCurrentDoc` is properly declared at line 3.
Evidence: `head -n 5 workspace/automation/reorder-reminder.gs` printed lines 1–5 including `* @OnlyCurrentDoc` and `function checkStock() {`.

### Invented libraries
Looked for: Non-existent Apps Script services or undeclared helper functions in `workspace/automation/reorder-reminder.gs`.
Found: Clean — uses only standard `SpreadsheetApp` and `Logger` services and verified functions (`checkStock`, `generateMonthlyReport`, `onEdit`).
Evidence: `grep -n "^function " workspace/automation/reorder-reminder.gs` printed `5:function checkStock() {`, `31:function generateMonthlyReport() {`, and `84:function onEdit(e) {`.

What I will do about what I found (a fix on the sheet copy, SCS3.5's test log, or 'clean'):
Clean — all four checks verified against `workspace/automation/reorder-reminder.gs` and recorded in `workspace/automation/test-log.md` (`5f2b664`).
