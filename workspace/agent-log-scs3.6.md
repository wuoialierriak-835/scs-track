# Agent Log -- SCS3.6 (that evening)

Fill it as it runs, not after.  Commit this log on main; the agent's changes stay on the branch.

The job, in one sentence (folder, task, stopping point): In `workspace/stock-tools`, make `tidyName` leave `ng'ombe` as typed, add a test, run the tests, list what changed, and stop.
Scope (the one folder it may touch): workspace/stock-tools
Branch: scs3.6-agent
The rules file it read first: GEMINI.md
Tool and tier: Gemini (free web tier)
Run (live, or the trainer's recorded run): live

| Step | What it proposed | Accepted or rejected, and why | What it touched |
|---|---|---|---|
| 1 | Read `GEMINI.md` and `workspace/stock-tools/reorder.js` | Accepted — needed to inspect `tidyName` regex and repo rules | none (read-only) |
| 2 | Update `tidyName` regex in `workspace/stock-tools/reorder.js` to `/(^|\s)\w/g` so `ng'ombe` becomes `Ng'ombe` instead of `Ng'Ombe` | Accepted — directly satisfies the task inside `workspace/stock-tools` | `workspace/stock-tools/reorder.js` |
| 3 | Add a unit test in `workspace/stock-tools/reorder.test.js` verifying `tidyName("ng'ombe salt lick") === "Ng'ombe Salt Lick"` | Accepted — requested in job prompt and inside scope | `workspace/stock-tools/reorder.test.js` |
| 4 | Update `workspace/stock-tools/README.md` to document `tidyName` apostrophe handling | Rejected — out of scope of the one-sentence task; editing docs was not requested | none (rejected before edit) |
| 5 | Run `node --test workspace/stock-tools/reorder.test.js` | Accepted — verified all 6 tests pass | none (test run) |

Outside the scope? No — the proposed `README.md` edit in Step 4 was rejected before modifying the file.
Tests after the run: `node --test workspace/stock-tools/reorder.test.js` (6/6 passing)
Result (merged with --no-ff, or closed): merged with --no-ff
Cost of the run: 0 KSh (estimated ~1,100 tokens in, ~280 tokens out on free web tier)
