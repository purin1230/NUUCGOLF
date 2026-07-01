/**
 * 政大企家班第28屆師徒隊報名系統
 * 使用方式：
 * 1. 建立 Google Sheet
 * 2. 擴充功能 > Apps Script
 * 3. 貼上此檔案內容
 * 4. 部署 > 新增部署 > 網頁應用程式
 * 5. 執行身分：自己；存取權：任何人
 */

const SHEET_NAME = '報名名單';
const NOTIFY_EMAIL = 'emma12301230@gmail.com';

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

    const headers = ['送出時間', '姓名', '電話', 'Email', '企家班屆數', 'LINE ID', '性別', '球齡/程度', '備註', '來源'];
    if (sheet.getLastRow() === 0) sheet.appendRow(headers);

    const data = JSON.parse(e.postData.contents || '{}');
    const row = [
      new Date(),
      data.name || '',
      data.phone || '',
      data.email || '',
      data.classYear || '',
      data.lineId || '',
      data.gender || '',
      data.level || '',
      data.note || '',
      data.source || ''
    ];
    sheet.appendRow(row);

    const subject = '🏌️ 第28屆政大企家班師徒隊新報名：' + (data.name || '未填姓名');
    const body =
`第28屆政大企家班師徒隊收到新報名：

姓名：${data.name || ''}
電話：${data.phone || ''}
Email：${data.email || ''}
企家班屆數：${data.classYear || ''}
LINE ID：${data.lineId || ''}
性別：${data.gender || ''}
球齡/程度：${data.level || ''}
備註：${data.note || ''}
送出時間：${new Date()}

Google Sheet：${ss.getUrl()}`;
    MailApp.sendEmail(NOTIFY_EMAIL, subject, body);

    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) })).setMimeType(ContentService.MimeType.JSON);
  }
}
