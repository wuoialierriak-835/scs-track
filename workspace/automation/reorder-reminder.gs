/**
 * AI-assisted, directed by wuoi
 * @OnlyCurrentDoc
 */
function checkStock() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const dashboard = ss.getSheetByName("Dashboard");
  if (!dashboard) {
    throw new Error('Sheet "Dashboard" was not found.');
  }

  const stockData = dashboard.getRange("A12:C15").getValues();
  const lowStockItems = stockData.filter(
    row => String(row[2]).trim().toUpperCase() === "REORDER"
  );

  let reminders = ss.getSheetByName("Reminders");
  if (!reminders) {
    reminders = ss.insertSheet("Reminders");
  }

  reminders.clearContents();
  reminders.getRange("A1:C1").setValues([["ITEM", "CURRENT STOCK", "STATUS"]]);
  reminders.getRange("A1:C1").setFontWeight("bold");

  if (lowStockItems.length > 0) {
    reminders.getRange(2, 1, lowStockItems.length, 3).setValues(lowStockItems);
  }
}

function generateMonthlyReport() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const records = ss.getSheetByName("Records");
  if (!records) {
    throw new Error('Sheet "Records" was not found.');
  }

  const lastRow = records.getLastRow();
  if (lastRow < 2) {
    Logger.log("No data rows found in Records.");
    return;
  }

  // Grab columns A through F starting from row 2
  const data = records.getRange(2, 1, lastRow - 1, 6).getValues();

  // Target month/year (0 = Jan, 10 = Nov)
  const reportMonth = 10;
  const reportYear = 2026;

  const monthName = new Date(reportYear, reportMonth).toLocaleString("en", {
    month: "long"
  });
  const monthLabel = `${monthName} ${reportYear}`;

  // Filter valid "OUT" transactions for November 2026
  const monthlySales = data.filter(row =>
    row[0] instanceof Date &&
    !isNaN(row[0]) &&
    row[0].getMonth() === reportMonth &&
    row[0].getFullYear() === reportYear &&
    String(row[2]).trim().toUpperCase() === "OUT"
  );

  // Calculate totals
  const unitsSold = monthlySales.reduce(
    (sum, row) => sum + (Number(row[3]) || 0), 0
  );
  const totalSales = monthlySales.reduce(
    (sum, row) => sum + (Number(row[5]) || 0), 0
  );

  // Get or create the Monthly Report sheet and append the summary
  let report = ss.getSheetByName("Monthly Report");
  if (!report) {
    report = ss.insertSheet("Monthly Report");
    report.appendRow(["Month", "Units Sold", "Total Sales"]);
    report.getRange("A1:C1").setFontWeight("bold");
  }

  report.appendRow([monthLabel, unitsSold, totalSales]);
}

function onEdit(e) {
  const sheet = e.range.getSheet();

  if (sheet.getName() !== "INTAKE") return;

  const row = e.range.getRow();
  const column = e.range.getColumn();

  if (row === 1 || column > 2) return;

  const item = sheet.getRange(row, 1).getValue();
  const quantity = sheet.getRange(row, 2).getValue();

  if (item === "" || quantity === "") return;

  const isValid = typeof quantity === "number" && quantity > 0;

  const dateCell = sheet.getRange(row, 3);

  if (dateCell.getValue() === "") {
    dateCell.setValue(new Date());
    dateCell.setNumberFormat("dd/MM/yyyy");
  }

  const checkCell = sheet.getRange(row, 4);

  if (isValid) {
    checkCell.setValue("OK");
  } else {
    checkCell.setValue("INVALID ENTRY");
  }
}
