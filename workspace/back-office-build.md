# Back-Office Build Notes (SCS3.4)

## Overkill Test
| # | Question | Client's Answer |
|---|---|---|
| 1 | How many items or transactions do you track per day? | About 5 to 15 daily stock movements (IN and OUT) across core kiosk staples. |
| 2 | Do you already have a smartphone or computer at the shop? | Yes, an Android phone with Google Sheets installed at the counter. |
| 3 | Who enters the daily numbers? | Only the shop owner (and one trusted assistant using the dropdown rows). |
| 4 | What problem does a paper notebook cause right now? | Hard to tell when stock hits the reorder level (5 units) or total monthly sales quickly. |
| 5 | Can you keep the sheet updated every day without slowing down customers? | Yes, logging a row takes under 15 seconds using the item dropdowns. |

Verdict: Sheets.  Pattern: Stock and Sales Ledger.  Because: You already have a smartphone at the counter and only need fast daily stock counts and automatic reorder alerts without doing manual sums every evening.

## Validation
| Column | Rule | The garbage I typed | Refused? |
|---|---|---|---|
| Records!A2:A1000 (DATE) | Date is valid (`Reject the input`) | `not-a-date` | Yes |
| Records!B2:B1000 (ITEM) | Value contains one from range `Lists!A2:A10` (`Reject the input`) | `Soda` (unlisted item) | Yes |
| Records!C2:C1000 (DIRECTION) | Value contains one from list `IN, OUT` (`Reject the input`) | `SOLD` | Yes |
| Records!D2:E1000 (QUANTITY, PRICE) | Value is greater than 0 (`Reject the input`) | `-5` and `0` | Yes |

## Protection
| Range | Who can edit | Warning or restriction | Entry columns still open? |
|---|---|---|---|
| Dashboard!A1:Z100 (entire Dashboard sheet) | Owner only | Restriction (only owner can edit) | Yes (`Records` entry columns remain open) |
| Records!F2:F1000 (AMOUNT formulas) | Owner only | Restriction (only owner can edit) | Yes (`Records!A2:E1000` entry columns remain open) |

## AI Receipts
| Ask (Column Headings Only) | Formula Suggested | Used? |
|---|---|---|
| `DATE, ITEM, DIRECTION, QUANTITY, PRICE, AMOUNT` — current stock per item | `=SUMIFS(RECORDS!D:D, RECORDS!B:B, A12, RECORDS!C:C, "IN") - SUMIFS(RECORDS!D:D, RECORDS!B:B, A12, RECORDS!C:C, "OUT")` | Yes |
| `DATE, ITEM, DIRECTION, QUANTITY, PRICE, AMOUNT` — current month units and sales out | `=SUMIFS(RECORDS!F:F, RECORDS!C:C, "OUT", RECORDS!A:A, ">="&DATE(YEAR(TODAY()),MONTH(TODAY()),1), RECORDS!A:A, "<="&EOMONTH(TODAY(),0))` | Yes |

## Break the books
| # | The attack | What I said would happen | What happened | Held or the fix |
|---|---|---|---|---|
| 1 | Typed an unlisted item (`Soda`) in `Records!B18` | Data validation will reject the input | Popup error blocked the entry immediately | Held |
| 2 | Typed text (`abc`) in `Records!A18` date column | Date validation will refuse non-date text | Popup error rejected the invalid date | Held |
| 3 | Typed `-10` in `Records!D18` quantity column | Greater-than-zero rule will block negative numbers | Popup error refused `-10` | Held |
| 4 | Typed `0` in `Records!E18` price column | Greater-than-zero rule will block zero price | Popup error refused `0` | Held |
| 5 | Typed `SOLD` instead of `OUT` in `Records!C18` | Dropdown list rule (`IN, OUT`) will refuse it | Popup error rejected `SOLD` | Held |
| 6 | Tried typing over a `SUMIFS` formula on `Dashboard!B12` as another user | Sheet protection will block editing on Dashboard | Edit was blocked with protected-cell notice | Held |
| 7 | Added a new valid row at `Records!A18:F18` and checked if `Dashboard` updated | Dashboard formulas (`D:D`, `B:B`) will include the new row automatically | `Dashboard` stock and monthly totals updated immediately | Held |
