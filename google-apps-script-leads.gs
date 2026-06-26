const SPREADSHEET_ID = "1EBTWjCcgnUdRxmKz_95WmRzuGyqojdiOCrYOxEazHy4";
const SHEET_NAME = "Sheet1";

function doOptions() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || "{}");
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error("Sheet not found: " + SHEET_NAME);
    }

    const row = [
      payload.submittedAt || new Date().toISOString(),
      payload.companyType || "",
      payload.companySize || "",
      payload.dailyCups || "",
      payload.machineType || "",
      Array.isArray(payload.requirements) ? payload.requirements.join(", ") : "",
      payload.name || "",
      payload.company || "",
      payload.email || "",
      payload.phone || "",
      payload.notes || "",
      payload.source || "kaffelosninger.dk landing page",
      "Ny"
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        ok: false,
        error: String(error && error.message ? error.message : error)
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
