# 第28屆政大企家班師徒隊招募網站

這是可直接部署到 GitHub Pages 的一頁式招募網站，包含：

- 一頁式活動介紹
- 幹部團隊
- 年費與繳費資訊
- 線上報名表
- Google Sheet 自動收件
- Email 自動通知：emma12301230@gmail.com

---

## 一、上傳到 GitHub Pages

1. 到 GitHub 建立新的 Repository，例如：`nccu-golf`
2. 將本資料夾內所有檔案上傳到 Repository 根目錄：

```text
index.html
style.css
script.js
config.js
google-apps-script.js
assets/
README.md
```

注意：不要只上傳 ZIP，要先解壓縮後，把裡面的檔案全部上傳。

3. 到 Repository 的 `Settings` → `Pages`
4. Source 選擇 `Deploy from a branch`
5. Branch 選 `main`，Folder 選 `/root`
6. 儲存後等待 1–3 分鐘

網址會類似：

```text
https://你的GitHub帳號.github.io/nccu-golf/
```

---

## 二、建立 Google Sheet

1. 使用 `emma12301230@gmail.com` 登入 Google
2. 建立新的 Google 試算表
3. 建議命名：`政大企家班第28屆師徒隊報名名單`
4. 點選上方 `擴充功能` → `Apps Script`
5. 刪除原本程式碼
6. 貼上 `google-apps-script.js` 內容
7. 儲存

---

## 三、部署 Apps Script

1. Apps Script 右上角點 `部署`
2. 選 `新增部署`
3. 類型選 `網頁應用程式`
4. 執行身分：`我`
5. 存取權限：`任何人`
6. 按 `部署`
7. 第一次會要求授權，請依指示允許
8. 複製產生的 Web App URL

網址會類似：

```text
https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxxxxx/exec
```

---

## 四、把 Apps Script 網址貼到網站

打開 `config.js`，找到：

```javascript
const GOOGLE_SCRIPT_URL = "";
```

改成：

```javascript
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxxxxx/exec";
```

儲存後重新上傳 `config.js` 到 GitHub。

---

## 五、測試

1. 打開 GitHub Pages 網站
2. 填寫報名表
3. 按送出報名
4. 到 Google Sheet 確認是否新增資料
5. 到 Gmail 確認是否收到通知信

---

## 六、常見問題

### 圖片顯示不出來
請確認 `assets/logo.png` 與 `assets/hero-golf.svg` 都有上傳到 GitHub。

### 報名送不出去
請確認 `config.js` 裡的 `GOOGLE_SCRIPT_URL` 已貼上 Apps Script 部署網址，且存取權限設定為「任何人」。

### Google Sheet 沒資料
請確認 Apps Script 是從該 Google Sheet 的 `擴充功能 → Apps Script` 建立，不要另外建立獨立 Apps Script。

---

© 第28屆政大企家班師徒隊
