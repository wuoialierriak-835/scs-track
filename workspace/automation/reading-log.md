# Reading log -- SCS3.5

Script: workspace/automation/reorder-reminder.gs
Read to the last line before the first run: yes
Label: AI-assisted, directed by wuoi

| Line no. | The line, first words | In my own words | Which word |
|---|---|---|---|
| 5 | function checkStock() { | starts the checkStock function to list low stock items | sequence |
| 6 | const ss = SpreadsheetApp.getActiveSpreadsheet(); | stores the current spreadsheet in variable ss | variable |
| 7 | const dashboard = ss.getSheetByName("Dashboard"); | finds the Dashboard tab and stores it in dashboard | variable |
| 8 | if (!dashboard) { | checks if the Dashboard tab is missing | condition |
| 9 | throw new Error('Sheet "Dashboard" was not found.'); | stops the script with a clear error message if Dashboard is missing | sequence |
| 12 | const stockData = dashboard.getRange("A12:C15").getValues(); | reads rows 12 to 15 across columns A to C from Dashboard | variable |
| 13 | const lowStockItems = stockData.filter( | starts filtering stockData rows into lowStockItems | loop |
| 14 | row => String(row[2]).trim().toUpperCase() === "REORDER" | checks if column C cleaned and uppercased equals REORDER | condition |
| 15 | ); | closes the filter expression on stockData | sequence |
| 17 | let reminders = ss.getSheetByName("Reminders"); | looks for an existing Reminders tab | variable |
| 18 | if (!reminders) { | checks whether the Reminders tab was not found | condition |
| 19 | reminders = ss.insertSheet("Reminders"); | creates a new Reminders tab if it does not exist | sequence |
| 22 | reminders.clearContents(); | clears old cell contents from the Reminders tab | sequence |
| 23 | reminders.getRange("A1:C1").setValues([["ITEM", "CURRENT STOCK", "STATUS"]]); | writes the three column headings into row 1 of Reminders | sequence |
| 24 | reminders.getRange("A1:C1").setFontWeight("bold"); | formats the header row in bold text | sequence |
| 26 | if (lowStockItems.length > 0) { | checks if at least one item matched REORDER | condition |
| 27 | reminders.getRange(2, 1, lowStockItems.length, 3).setValues(lowStockItems); | writes all matching low stock rows starting at row 2 | sequence |
| 31 | function generateMonthlyReport() { | starts the generateMonthlyReport function for monthly totals | sequence |
| 32 | const ss = SpreadsheetApp.getActiveSpreadsheet(); | stores the active spreadsheet in variable ss | variable |
| 33 | const records = ss.getSheetByName("Records"); | finds the Records tab and stores it in records | variable |
| 34 | if (!records) { | checks if the Records tab is missing | condition |
| 35 | throw new Error('Sheet "Records" was not found.'); | stops with an error if the Records tab does not exist | sequence |
| 38 | const lastRow = records.getLastRow(); | gets the row number of the last populated row in Records | variable |
| 39 | if (lastRow < 2) { | checks if Records only has a header row or is empty | condition |
| 40 | Logger.log("No data rows found in Records."); | writes a message to the execution log when there are no data rows | sequence |
| 41 | return; | exits the function early when no data rows exist | sequence |
| 45 | const data = records.getRange(2, 1, lastRow - 1, 6).getValues(); | reads all data rows starting at row 2 across columns A to F | variable |
| 48 | const reportMonth = 10; | sets the target month index to 10 for November | variable |
| 49 | const reportYear = 2026; | sets the target year to 2026 | variable |
| 51 | const monthName = new Date(reportYear, reportMonth).toLocaleString("en", { | converts the month number into the full English month name | variable |
| 52 | month: "long" | specifies full month name formatting such as November | variable |
| 53 | }); | closes the toLocaleString options and call | sequence |
| 54 | const monthLabel = `${monthName} ${reportYear}`; | combines the month name and year into November 2026 | variable |
| 57 | const monthlySales = data.filter(row => | starts filtering Records rows into monthlySales | loop |
| 58 | row[0] instanceof Date && | checks that column A contains a valid Date object | condition |
| 59 | !isNaN(row[0]) && | checks that the date value is not an invalid date | condition |
| 60 | row[0].getMonth() === reportMonth && | checks that the row date month matches November | condition |
| 61 | row[0].getFullYear() === reportYear && | checks that the row date year matches 2026 | condition |
| 62 | String(row[2]).trim().toUpperCase() === "OUT" | checks that column C cleaned and uppercased equals OUT | condition |
| 63 | ); | closes the monthlySales filter condition | sequence |
| 66 | const unitsSold = monthlySales.reduce( | starts summing units sold across matching November rows | loop |
| 67 | (sum, row) => sum + (Number(row[3]) || 0), 0 | adds column D as a number or 0 to the running units total | variable |
| 68 | ); | closes the unitsSold reduce calculation | sequence |
| 69 | const totalSales = monthlySales.reduce( | starts summing sales value across matching November rows | loop |
| 70 | (sum, row) => sum + (Number(row[5]) || 0), 0 | adds column F as a number or 0 to the running sales total | variable |
| 71 | ); | closes the totalSales reduce calculation | sequence |
| 74 | let report = ss.getSheetByName("Monthly Report"); | looks for an existing Monthly Report tab | variable |
| 75 | if (!report) { | checks if the Monthly Report tab does not exist yet | condition |
| 76 | report = ss.insertSheet("Monthly Report"); | creates the Monthly Report tab if it is missing | sequence |
| 77 | report.appendRow(["Month", "Units Sold", "Total Sales"]); | writes the header row into Monthly Report | sequence |
| 78 | report.getRange("A1:C1").setFontWeight("bold"); | formats the Monthly Report header row in bold | sequence |
| 81 | report.appendRow([monthLabel, unitsSold, totalSales]); | appends the November 2026 summary row to Monthly Report | sequence |
| 84 | function onEdit(e) { | trigger function that runs automatically when a cell is edited | trigger |
| 85 | const sheet = e.range.getSheet(); | gets the sheet where the user edit occurred | variable |
| 87 | if (sheet.getName() !== "INTAKE") return; | stops immediately if the edited sheet is not INTAKE | condition |
| 89 | const row = e.range.getRow(); | gets the row number of the edited cell | variable |
| 90 | const column = e.range.getColumn(); | gets the column number of the edited cell | variable |
| 92 | if (row === 1 || column > 2) return; | ignores edits to the header row or columns past column B | condition |
| 94 | const item = sheet.getRange(row, 1).getValue(); | reads the item name from column A of the edited row | variable |
| 95 | const quantity = sheet.getRange(row, 2).getValue(); | reads the quantity from column B of the edited row | variable |
| 97 | if (item === "" || quantity === "") return; | stops if either item or quantity is still blank | condition |
| 99 | const isValid = typeof quantity === "number" && quantity > 0; | checks that quantity is a number strictly greater than zero | condition |
| 101 | const dateCell = sheet.getRange(row, 3); | selects column C of the edited row for the date stamp | variable |
| 103 | if (dateCell.getValue() === "") { | checks whether the date cell in column C is currently empty | condition |
| 104 | dateCell.setValue(new Date()); | writes the current date into column C | sequence |
| 105 | dateCell.setNumberFormat("dd/MM/yyyy"); | formats the stamped date as dd/MM/yyyy | sequence |
| 108 | const checkCell = sheet.getRange(row, 4); | selects column D of the edited row for the validation status | variable |
| 110 | if (isValid) { | checks whether the entered quantity passed validation | condition |
| 111 | checkCell.setValue("OK"); | writes OK in column D when quantity is valid | sequence |
| 112 | } else { | runs the fallback branch when quantity is invalid | condition |
| 113 | checkCell.setValue("INVALID ENTRY"); | writes INVALID ENTRY in column D when quantity is invalid | sequence |
| 10 | } // Close missing Dashboard check | ends the missing Dashboard if-block | sequence |
| 20 | } // Close missing Reminders check | ends the missing Reminders if-block | sequence |
| 28 | } // Close lowStockItems check | ends the lowStockItems if-block | sequence |
| 29 | } // Close checkStock function | ends the checkStock function | sequence |
| 36 | } // Close missing Records check | ends the missing Records if-block | sequence |
| 42 | } // Close empty Records check | ends the empty Records if-block | sequence |
| 79 | } // Close missing Monthly Report check | ends the missing Monthly Report if-block | sequence |
| 82 | } // Close generateMonthlyReport function | ends the generateMonthlyReport function | sequence |
| 106 | } // Close empty date check | ends the empty date if-block | sequence |
| 114 | } // Close validation branch | ends the valid/invalid quantity if-else block | sequence |
| 115 | } // Close onEdit function | ends the onEdit trigger function | sequence |
