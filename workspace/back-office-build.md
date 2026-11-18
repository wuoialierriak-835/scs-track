# Back-Office Build Notes (SCS3.4)

## The Overkill Verdict
Google Sheets is a good fit for this kiosk because it tracks ~5–15 daily items with simple IN/OUT stock counts and monthly sales totals. However, if the owner has no smartphone or reliable internet at the counter, a simple two-column paper ledger book would be faster and less overkill.

## Validation and Protection
- **Validation:** Applied strict `Reject the input` Data Validation rules on `Records`: `Is valid date` on `A2:A1000`, `Dropdown (from a range)` referencing `Lists` on `B2:B1000`, `Dropdown (from a list)` (`IN, OUT`) on `C2:C1000`, and `Greater than 0` on `D2:E1000`.
- **Protection:** Protected the `Dashboard` sheet so only the owner can edit formulas, while leaving `Records` data-entry rows open for logging.

## The AI Receipts
Asked AI using column headings only (`DATE, ITEM, DIRECTION, QUANTITY, PRICE, AMOUNT`) to troubleshoot `SUMIFS` tab-name errors (`RECORD!` vs `RECORDS!`) and hidden trailing spaces without exposing private client data.

## Break the Books
Tested entering an invalid item name (rejected by dropdown validation), entering `0` or negative numbers in Quantity/Price (rejected by `> 0` rule), and typing over a formula on `Dashboard` (blocked by sheet protection).
