# The nine breaks -- SCS3.5

| # | Break | Cannot happen because ... (line) | Found -- patched at (line, commit) |
|---|---|---|---|
| 1 | The header row counted | Cannot happen because line 12 reads fixed range A12:C15 below headers, line 45 starts Records at row 2, and line 92 exits if row === 1 | none |
| 2 | The wrong tab | Cannot happen because lines 7, 33, and 87 check getSheetByName("Dashboard"), getSheetByName("Records"), and sheet.getName() !== "INTAKE" | none |
| 3 | The number read as text | Cannot happen because lines 67 and 70 coerce with Number(row[3]) || 0 and Number(row[5]) || 0, and line 99 checks typeof quantity === "number" && quantity > 0 | none |
| 4 | The boundary | Cannot happen because line 39 exits when lastRow < 2, line 92 ignores row === 1 or column > 2, and line 99 requires quantity > 0 so 0 is rejected | none |
| 5 | The overwrite | Cannot happen because line 81 uses appendRow on Monthly Report and line 103 checks if (dateCell.getValue() === "") before stamping | none |
| 6 | The invented piece | Cannot happen because checkStock, generateMonthlyReport, and onEdit were all executed and verified in the Apps Script execution log | found -- patched @OnlyCurrentDoc at line 3, 5f2b664 |
| 7 | The silent assumption | Cannot happen because lines 8 and 34 throw errors if Dashboard or Records is missing, and lines 18 and 75 create output sheets if missing | none |
| 8 | The trigger that runs too often | Cannot happen because checkStock runs on a daily time-driven trigger (once per day, 8am-9am) and onEdit at line 84 exits on lines 87, 92, and 97 unless INTAKE columns A or B are edited | none |
| 9 | The confident wrong answer | Cannot happen because Test 1 (Maize Flour & Cooking Oil reorder list) and Test 2 (November 2026: 15 units, 2500 total sales) caught and confirmed expected totals in test-log.md | none |
