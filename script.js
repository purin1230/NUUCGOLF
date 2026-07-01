const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const reveal = () => {
  $$('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.86) el.classList.add('show');
  });
};
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

$('#copyBank')?.addEventListener('click', async () => {
  const account = $('#bankAccount').textContent.replace(/\s/g, '');
  try {
    await navigator.clipboard.writeText(account);
    $('#copyBank').textContent = '已複製帳號';
    setTimeout(() => $('#copyBank').textContent = '一鍵複製帳號', 1800);
  } catch {
    alert('帳號：' + account);
  }
});

$('#signupForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const msg = $('#formMsg');
  const btn = form.querySelector('button[type="submit"]');

  if (!GOOGLE_SCRIPT_URL) {
    msg.textContent = '尚未設定 Google Apps Script 網址，請先在 config.js 貼上部署網址。';
    msg.style.color = '#ffd66b';
    return;
  }

  const data = Object.fromEntries(new FormData(form).entries());
  data.source = 'GitHub Pages';
  data.createdAt = new Date().toLocaleString('zh-TW', { hour12: false });

  btn.disabled = true;
  btn.textContent = '送出中...';
  msg.textContent = '';

  try {
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data)
    });
    form.reset();
    msg.textContent = '報名成功！資料已送出，謝謝您的加入。';
    msg.style.color = '#f4d98b';
  } catch (err) {
    msg.textContent = '送出失敗，請稍後再試，或聯繫幹部協助報名。';
    msg.style.color = '#ff9a9a';
  } finally {
    btn.disabled = false;
    btn.textContent = '送出報名';
  }
});
