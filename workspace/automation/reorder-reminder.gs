/**
 * AI-assisted, directed by wuoi
 * @OnlyCurrentDoc
 */
function checkStock() { // Start function to list low-stock items
  const ss = SpreadsheetApp.getActiveSpreadsheet(); // Get the active spreadsheet
  const dashboard = ss.getSheetByName("Dashboard"); // Get the Dashboard tab
  if (!dashboard) { // Check if Dashboard tab is missing
    throw new Error('Sheet "Dashboard" was not found.'); // Stop with error if Dashboard is missing
  } // Close missing Dashboard check

  const stockData = dashboard.getRange("A12:C15").getValues(); // Read rows 12 to 15 across columns A to C
  const lowStockItems = stockData.filter( // Filter stock rows for items needing reorder
    row => String(row[2]).trim().toUpperCase() === "REORDER" // Check if column C trimmed and uppercased is REORDER
  ); // Close filter callback

  let reminders = ss.getSheetByName("Reminders"); // Look up existing Reminders tab
  if (!reminders) { // Check if Reminders tab does not exist
    reminders = ss.insertSheet("Reminders"); // Create Reminders tab if missing
  } // Close missing Reminders check

  reminders.clearContents(); // Clear old contents from Reminders tab
  reminders.getRange("A1:C1").setValues([["ITEM", "CURRENT STOCK", "STATUS"]]); // Write header row in A1:C1
  reminders.getRange("A1:C1").setFontWeight("bold"); // Format header row as bold

  if (lowStockItems.length > 0) { // Check if any items matched REORDER
    reminders.getRange(2, 1, lowStockItems.length, 3).setValues(lowStockItems); // Write matching rows starting at row 2
  } // Close lowStockItems check
} // Close checkStock function

function generateMonthlyReport() { // Start function to calculate monthly sales report
  const ss = SpreadsheetApp.getActiveSpreadsheet(); // Get the active spreadsheet
  const records = ss.getSheetByName("Records"); // Get the Records tab
  if (!records) { // Check if Records tab is missing
    throw new Error('Sheet "Records" was not found.'); // Stop with error if Records is missing
  } // Close missing Records check

  const lastRow = records.getLastRow(); // Find last populated row in Records
  if (lastRow < 2) { // Check if Records has no data rows below row 1
    Logger.log("No data rows found in Records."); // Log message when no data rows exist
    return; // Exit early when Records has no data
  } // Close empty Records check

  // Grab columns A through F starting from row 2
  const data = records.getRange(2, 1, lastRow - 1, 6).getValues(); // Read all data rows from row 2 across A to F

  // Target month/year (0 = Jan, 10 = Nov)
  const reportMonth = 10; // Set target month index to November (10)
  const reportYear = 2026; // Set target year to 2026

  const monthName = new Date(reportYear, reportMonth).toLocaleString("en", { // Format month number as English month name
    month: "long" // Request full month name format
  }); // Close toLocaleString call
  const monthLabel = `${monthName} ${reportYear}`; // Combine month name and year label

  // Filter valid "OUT" transactions for November 2026
  const monthlySales = data.filter(row => // Filter Records rows for November 2026 OUT sales
    row[0] instanceof Date && // Check column A is a Date object
    !isNaN(row[0]) && // Check column A date is valid
    row[0].getMonth() === reportMonth && // Check date month matches November
    row[0].getFullYear() === reportYear && // Check date year matches 2026
    String(row[2]).trim().toUpperCase() === "OUT" // Check column C status is OUT
  ); // Close monthlySales filter

  // Calculate totals
  const unitsSold = monthlySales.reduce( // Sum units sold across matching rows
    (sum, row) => sum + (Number(row[3]) || 0), 0 // Add column D numeric value or 0
  ); // Close unitsSold reduce
  const totalSales = monthlySales.reduce( // Sum total sales across matching rows
    (sum, row) => sum + (Number(row[5]) || 0), 0 // Add column F numeric value or 0
  ); // Close totalSales reduce

  // Get or create the Monthly Report sheet and append the summary
  let report = ss.getSheetByName("Monthly Report"); // Look up Monthly Report tab
  if (!report) { // Check if Monthly Report tab is missing
    report = ss.insertSheet("Monthly Report"); // Create Monthly Report tab if missing
    report.appendRow(["Month", "Units Sold", "Total Sales"]); // Write header row
    report.getRange("A1:C1").setFontWeight("bold"); // Format header row as bold
  } // Close missing Monthly Report check

  report.appendRow([monthLabel, unitsSold, totalSales]); // Append monthly totals row
} // Close generateMonthlyReport function

function onEdit(e) { // Trigger function when a cell is edited
  const sheet = e.range.getSheet(); // Get the sheet where the edit occurred

  if (sheet.getName() !== "INTAKE") return; // Exit if edited sheet is not INTAKE

  const row = e.range.getRow(); // Get row number of edited cell
  const column = e.range.getColumn(); // Get column number of edited cell

  if (row === 1 || column > 2) return; // Exit if edit is on header row or past column B

  const item = sheet.getRange(row, 1).getValue(); // Read item name in column A
  const quantity = sheet.getRange(row, 2).getValue(); // Read quantity in column B

  if (item === "" || quantity === "") return; // Exit if item or quantity is blank

  const isValid = typeof quantity === "number" && quantity > 0; // Validate quantity is a positive number

  const dateCell = sheet.getRange(row, 3); // Select date cell in column C

  if (dateCell.getValue() === "") { // Check if date cell is currently empty
    dateCell.setValue(new Date()); // Stamp current date in column C
    dateCell.setNumberFormat("dd/MM/yyyy"); // Format date as dd/MM/yyyy
  } // Close empty date check

  const checkCell = sheet.getRange(row, 4); // Select status cell in column D

  if (isValid) { // Check if quantity passed validation
    checkCell.setValue("OK"); // Write OK in column D
  } else { // Handle invalid quantity
    checkCell.setValue("INVALID ENTRY"); // Write INVALID ENTRY in column D
  } // Close validation branch
} // Close onEdit function
