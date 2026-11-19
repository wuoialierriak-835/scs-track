# Test log -- SCS3.5

| Case | Input rows (made up) | Expected (by hand, before the run) | Actual (after the run) | Pass or fail | Patch (line, commit) |
|---|---|---|---|---|---|
| Test 1 | Dashboard A12:C15: Maize Flour (3, REORDER), Sugar (25, OK), Cooking Oil (2, REORDER), Salt (15, OK) | Reminders tab lists Maize Flour (3, REORDER) and Cooking Oil (2, REORDER) | First run requested full Drive permissions; after adding @OnlyCurrentDoc at line 3, Reminders listed Maize Flour and Cooking Oil | fail -> pass | line 3, 5f2b664 |
| Test 2 | Records: 2026-11-05 Maize OUT 10 units @ 1500; 2026-11-12 Sugar OUT 5 units @ 1000; 2026-11-18 Beans IN 20 units @ 2000 | Monthly Report appends November 2026, 15 units sold, 2500 total sales | Monthly Report appended November 2026, 15, 2500 | pass | none |
| Edge case | INTAKE row 2: Item = Rice, Quantity = -4 (and blank item row 3) | Date stamped in col C and INVALID ENTRY in col D for -4; blank item ignored | Date stamped in col C and INVALID ENTRY written in col D; blank item exited cleanly | pass | none |
| Second edge case (optional, SGL menu) | Dashboard C12 has lowercase/spaces " reorder " | Trimmed and uppercased to match REORDER | Matched REORDER and copied row to Reminders | pass | none |
| Partner as a careless owner | Partner entered 0 quantity and edited column D directly on INTAKE | Column D edit ignored; 0 quantity marked INVALID ENTRY | Column D edit ignored; 0 quantity stamped INVALID ENTRY | pass | none |
| Re-run in front of the trainer | | | | | |
