1. Wrote a one-page automation spec on paper with made-up rows and had it initialled before prompting.
2. Sent one structured prompt with column headings and made-up rows to generate the Apps Script draft.
3. Logged every line of the script in reading-log.md in my own words before running it for the first time.
4. Narrowed OAuth permissions by adding @OnlyCurrentDoc by hand and committed the patch separately.
5. Verified expected answers by hand against Test 1, Test 2, the edge case, and all nine breaks.
6. What I might be wrong about: the owner's real sheet may have extra header rows, text-formatted numbers, or different status wording in Dashboard/Records, which I would find out by checking a sample of real column formats before running on live data.
