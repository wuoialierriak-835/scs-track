# Patch Card -- SCS3.6

One real bug from the audit.  The fix, not a rewrite.  The spec and the test come before the prompt.

The bug, in one sentence: `reorderList` in `workspace/stock-tools/reorder.js` uses `<` instead of `<=`, dropping items whose stock equals their reorder level (`grinding discs 115 mm` at 20/20).
Which check found it (auth, edge case, wrong version, invented library): edge case
The spec for the fix, one thing: Change `reorderList(rows)` in `workspace/stock-tools/reorder.js` so rows where `parseInt(r["In stock"], 10)` is less than or equal to (`<=`) `parseInt(r["Reorder at"], 10)` are returned.
The test that shows the bug (input -> expected): `"grinding discs 115 mm,Gas and welding supplier,20,20,pieces"` -> `reorderList` returns `["grinding discs 115 mm"]` (failed before patch, passed after).
The prompt, word for word: In `workspace/stock-tools/reorder.js`, patch only `reorderList(rows)` so items with `In stock` equal to `Reorder at` (`<=`) are included in the returned array. Do not modify any other function.

## The Diff, Read Whole

Every line the patch changed.  A line the spec did not ask for is marked BEYOND in the second column.

| Line | What the patch changed | In the spec? | My adjustment |
|---|---|---|---|
| 22 | Added `console.log("Checking reorder levels...");` | BEYOND | Removed in adjustment commit because stdout noise corrupts WhatsApp/SMS message output |
| 23 | Changed `parseInt(r["In stock"], 10) < parseInt(r["Reorder at"], 10)` to `<=` | yes | Kept as patched |

Tests before the patch: 5 pass, 1 fail (`includes items equal to their reorder level` failed)
Tests after the patch: 6 pass, 0 fail (`node --test workspace/stock-tools/reorder.test.js`)
Tests after my adjustment: 6 pass, 0 fail (`node --test workspace/stock-tools/reorder.test.js`)
Commits on scs3.6-patch (the test, the patch, the adjustment): `test: add failing boundary test for items equal to reorder level`, `patch: include items equal to reorder level in reorderList (AI-assisted, directed by wuoi)`, `adjust: remove unrequested console.log added beyond spec`

## Receipt

1. Label: AI-assisted, directed by wuoi
2. Tool and tier: Gemini (free web tier)
3. Spec and prompt: above, word for word
4. Tests or checks: `node --test workspace/stock-tools/reorder.test.js` (6/6 passing) and Four-Checks audit in `workspace/four-checks-audit.md`
5. Rights line: not checked
6. Cost: 0 KSh (estimated ~450 tokens in, ~120 tokens out on free web tier)
