1. Four checks (auth, edge cases, wrong versions, invented libraries) catch silent failures in AI-generated code even when its own test suite passes.
2. Hardcoded credentials like `SMS_API_KEY` must be removed by hand into environment variables and rotated at the gateway, never pasted into an AI prompt.
3. Scoping a prompt to one function on its own branch (`scs3.6-patch`) with a failing test first keeps diffs readable and prevents unwanted rewrites.
4. Every AI-assisted deliverable needs a six-line receipt recording the label, tool/tier, exact prompt, verification checks, honest rights status, and cost in shillings.
5. An agent run must read the repo rules file (`GEMINI.md`) first, stay inside one named folder on its own branch (`scs3.6-agent`), and have every change reviewed before merging.
6. Least carefully run check on my own patch: Wrong versions — I checked `node --version` (`v22.22.1`) locally, but a test running `reorder.js` under Node 20 LTS (`nvm exec 20 node --test workspace/stock-tools/reorder.test.js`) would reveal that `Object.groupBy` breaks older LTS versions.
