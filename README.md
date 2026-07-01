<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>第28屆 政大企家班師徒隊｜誠摯招募中</title>
  <meta name="description" content="第28屆政大企家班師徒隊誠摯招募中，透過每月球局凝聚企家人情誼，跨屆交流、傳承智慧。" />
  <meta property="og:title" content="第28屆 政大企家班師徒隊｜誠摯招募中" />
  <meta property="og:description" content="每月最後一個週日，全年12場球敘，歡迎企家班學長姊加入。" />
  <meta property="og:image" content="assets/logo.png" />
  <link rel="icon" href="assets/logo.png" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header class="hero" id="top">
    <nav class="nav">
      <a class="brand" href="#top"><img src="assets/logo.png" alt="政大企家班師徒隊 Logo"><span>政大企家班師徒隊</span></a>
      <div class="nav-links"><a href="#about">活動介紹</a><a href="#fee">年費</a><a href="#team">幹部</a><a href="#register" class="pill">立即報名</a></div>
    </nav>
    <div class="hero-content reveal">
      <p class="eyebrow">NCCU EMBA Golf Community</p>
      <h1>第 28 屆 政大企家班<br>師徒隊誠摯招募中</h1>
      <p class="lead">高爾夫球場上，一桿一揮之間，流轉的不只是技術切磋，更是企家人跨越時間的默契與溫度。</p>
      <div class="hero-actions"><a href="#register" class="btn primary">立即填寫報名表</a><a href="#about" class="btn ghost">了解活動內容</a></div>
    </div>
    <div class="scroll-hint">Scroll</div>
  </header>

  <main>
    <section class="section intro" id="about">
      <div class="section-title reveal"><p>About</p><h2>球道上的傳承與交流</h2></div>
      <div class="intro-grid">
        <div class="intro-card reveal"><span>⛳</span><h3>活動期間</h3><p>2026/07 ～ 2027/06，共 12 場，每月最後一個週日舉行。</p></div>
        <div class="intro-card reveal"><span>🎬</span><h3>本屆特色</h3><p>每季一場主題球局，結合 Dress Code 與球場趣味挑戰。</p></div>
        <div class="intro-card reveal"><span>🤝</span><h3>跨屆交流</h3><p>不論球場老將或初學新手，都能在球道上建立情誼、傳承智慧。</p></div>
      </div>
    </section>

    <section class="section timeline-section">
      <div class="section-title reveal"><p>Schedule</p><h2>全年 12 場精彩球敘</h2></div>
      <div class="timeline reveal">
        <div><b>2026/07</b><span>開季迎新球敘</span></div><div><b>每月最後週日</b><span>固定例行球局</span></div><div><b>每季</b><span>主題球局與 Dress Code</span></div><div><b>2027/06</b><span>年度總結與感謝球敘</span></div>
      </div>
    </section>

    <section class="section fee" id="fee">
      <div class="section-title reveal"><p>Membership Fee</p><h2>年費與繳費資訊</h2></div>
      <div class="pricing">
        <div class="price-card reveal"><p>男生學長</p><strong>NT$ 10,000</strong><span>全年 12 場統籌費</span></div>
        <div class="price-card highlight reveal"><p>女生學姊 / 在校生</p><strong>NT$ 6,000</strong><span>優惠價</span></div>
      </div>
      <div class="bank-card reveal"><p>每場球敘費用另計，賽前公告</p><h3>中國信託（822）</h3><div class="account"><code id="bankAccount">9015 3777 7701</code><button onclick="copyAccount()">複製帳號</button></div></div>
    </section>

    <section class="section team" id="team">
      <div class="section-title reveal"><p>Team</p><h2>第 28 屆幹部團隊</h2></div>
      <div class="team-grid reveal" id="teamGrid"></div>
    </section>

    <section class="section register" id="register">
      <div class="register-wrap">
        <div class="register-copy reveal"><p class="eyebrow">Join Us</p><h2>立即加入師徒隊</h2><p>請填寫以下報名資料，送出後資料將自動進入 Google Sheet，並寄送通知至 Emma 信箱。</p><div class="note">請先在 script.js 貼上 Google Apps Script 部署網址。</div></div>
        <form class="form reveal" id="signupForm">
          <label>姓名<input name="name" required placeholder="請輸入姓名"></label>
          <label>電話<input name="phone" required placeholder="09xx-xxx-xxx"></label>
          <label>Email<input name="email" type="email" placeholder="example@email.com"></label>
          <label>企家班第幾屆<input name="classYear" required placeholder="例如：41屆"></label>
          <label>性別<select name="gender"><option value="">請選擇</option><option>男</option><option>女</option><option>不便填寫</option></select></label>
          <label>Line ID<input name="lineId" placeholder="方便後續聯繫"></label>
          <label>球齡 / 程度<select name="level"><option value="">請選擇</option><option>初學新手</option><option>一般球友</option><option>資深球友</option><option>其他</option></select></label>
          <label>是否需要安排同組<select name="groupNeed"><option>不用，幹部安排即可</option><option>需要，會另行備註</option></select></label>
          <label class="full">備註<textarea name="note" rows="4" placeholder="例如：希望同組名單、特殊需求等"></textarea></label>
          <button class="submit" type="submit">送出報名</button><p class="form-status" id="formStatus"></p>
        </form>
      </div>
    </section>
  </main>

  <footer><img src="assets/logo.png" alt="Logo"><p>第 28 屆 政大企家班 師徒隊 全體幹部 敬上</p><a href="#top">回到上方</a></footer>
  <iframe name="hiddenFrame" id="hiddenFrame" style="display:none"></iframe>
  <script src="script.js"></script>
</body>
</html>
