# AI diagnosis receipt -- SCS4.1

One prompt, before the hands touch the kit, inside the five moves.  Nothing private in it: no router password,
no client's name, no public address, no screenshot.  The hands follow the ladder, not the tool.

Tool (and tier): Gemini
Date: 2026-11-25
The fault it was for (Fault 1, 2 or 3 in the log): Fault 3
The prompt, word for word: Two lab machines have intermittent network failure on the isolated lab network; nothing private -- what should I check first before touching hardware, and in what order?
Its order of checks (one line): 1. Link and Wi-Fi/cable state (rung 1), 2. IP address and DHCP/subnet (rung 2), 3. Gateway reachability (rung 3), 4. Beyond the gateway (rung 4), 5. Name resolution/DNS (rung 5), 6. Target service/device (rung 6).
Where it matched the ladder: It started at physical link and IP configuration before testing higher rungs.
The rung it skipped or invented: none -- it matched
What my hands did instead, and why: Checked IP configuration on both lab machines and identified the duplicate static IP conflict on rung 2 before changing settings.
Label: AI-assisted diagnosis, checked against the ladder
