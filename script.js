# 第28屆政大企家班師徒隊招募網站

這是一個可直接部署到 GitHub Pages 的一頁式活動招募網站，包含：

- 一頁式招募頁
- 手機版響應式設計
- 線上報名表
- Google Sheet 自動收件
- Email 通知 Emma：emma12301230@gmail.com

---

## 一、GitHub Pages 部署方式

1. 登入 GitHub
2. 建立 New Repository，例如：`nccu-golf`
3. 上傳本資料夾內所有檔案：
   - `index.html`
   - `style.css`
   - `script.js`
   - `assets/`
   - `google-apps-script.js`
4. 到 Repository 的 `Settings`
5. 點選 `Pages`
6. Source 選擇 `Deploy from a branch`
7. Branch 選擇 `main`，資料夾選擇 `/root`
8. 儲存後，等待約 1～3 分鐘
9. 網站網址會變成：

```text
https://你的GitHub帳號.github.io/nccu-golf/
```

---

## 二、Google Sheet 串接方式

### Step 1：建立 Google Sheet

使用 `emma12301230@gmail.com` 建立一份 Google Sheet，建議名稱：

```text
政大企家班第28屆師徒隊報名名單
```

### Step 2：開啟 Apps Script

Google Sheet 上方選單：

```text
擴充功能 → Apps Script
```

把裡面的程式全部刪除，貼上本專案的：

```text
google-apps-script.js
```

### Step 3：部署成 Web App

1. 點右上角 `部署`
2. 選 `新增部署`
3. 類型選 `網頁應用程式`
4. 執行身分：`我`
5. 誰可以存取：`任何人`
6. 點 `部署`
7. 第一次會要求授權，請依照畫面允許
8. 複製部署網址，例如：

```text
https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxxxxx/exec
```

### Step 4：貼到網站

打開 `script.js`，找到：

```javascript
const GOOGLE_SCRIPT_URL = "";
```

改成：

```javascript
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyhn6IYeVwa-8zgsR0K-WAIWf6YmT-k1T8lgWpm66MT8IzRjEKSXsv2UVi1TTMIXPEG3A/exec";
```

儲存後重新上傳到 GitHub。

---

## 三、測試方式

1. 打開 GitHub Pages 網站
2. 填寫報名表
3. 按下送出
4. Google Sheet 會新增一列資料
5. `emma12301230@gmail.com` 會收到報名通知信

---

## 四、日後修改

- 修改文字：改 `index.html`
- 修改顏色與版面：改 `style.css`
- 修改表單串接網址：改 `script.js`
- 修改 Email 收件人：改 `google-apps-script.js` 的 `EMAIL_TO`

