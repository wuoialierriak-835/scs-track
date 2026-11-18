# Restore test log -- the practice business (2026-11-18)

A backup nobody has restored from is a hope.  'It worked' is not an entry: say what did not come back,
or what you checked to be sure nothing is missing.

| # | Restore | What I deleted or suspended | How I restored it | How long | What came back | What did not come back |
|---|---|---|---|---|---|---|
| 1 | The suspended user, restored whole | Suspended the new starter practice account during offboarding | Admin console > Directory > Users > selected suspended user > Reactivate | 1 min | Active sign-in access, OU placement, 2-Step Verification enrolment, and Gmail inbox | Files transferred to the manager during offboarding stayed with the manager and did not auto-return to My Drive |
| 2 | A file from the shared drive's trash | Deleted `invoice-0042.csv` from `Shop files` Shared Drive | Google Drive > Shared drives > `Shop files` > Trash > right-click > Restore | 1 min | `invoice-0042.csv` with all rows, columns, and Shared Drive manager permissions intact | Verified no external link sharing was added; version history remained intact |
| 3 | A user's deleted file, restored by the admin | Deleted `delivery-rota-draft.csv` from the new starter's My Drive and emptied user trash | Admin console > Directory > Users > selected user > Restore data > selected Drive date range | 3 mins | `delivery-rota-draft.csv` restored into the user's My Drive with full CSV contents intact | Any previous custom file-level share links did not come back; verified file opened cleanly |
| 4 | One file from the export | Extracted `Client-Onboarding-Checklist.docx` from the Google Takeout `.zip` archive | Downloaded Takeout `.zip`, extracted `Takeout/Drive/Client-Onboarding-Checklist.docx` locally, and re-uploaded to `Shop files` | 2 mins | Full document text, headings, and checklist formatting came back intact | Original Google Drive sharing permissions, original owner metadata, and live comment/version history did not come back |
