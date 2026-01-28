# Web3Forms Sozlash Yo'riqnomasi

Portfolio contact form uchun bepul email xizmati (Backend kerak emas!)

## ✨ Afzalliklari

- ✅ **Bepul**: Cheksiz xabarlar
- ✅ **Backend kerak emas**: Faqat frontend
- ✅ **Tez**: Bir necha daqiqada sozlash
- ✅ **Spam himoya**: Honeypot va reCAPTCHA
- ✅ **Email notification**: Har bir xabar uchun
- ✅ **Custom redirect**: O'z thank you page'ingiz

## 🚀 Sozlash Bosqichlari

### 1. Web3Forms da Ro'yxatdan O'tish

1. **https://web3forms.com** ga kiring
2. **"Get Started"** ni bosing
3. Emailingizni kiriting va verify qiling
4. **Access Key** ni oling (masalan: `a1b2c3d4-5678-90ab-cdef-1234567890ab`)

### 2. Access Key ni Qo'shish

`Frontend/index.html` faylini oching va 883-qatorda:

```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
```

`YOUR_ACCESS_KEY_HERE` ni o'zingizning Access Key bilan almashtiring:

```html
<input type="hidden" name="access_key" value="a1b2c3d4-5678-90ab-cdef-1234567890ab">
```

### 3. Redirect URL (Ixtiyoriy)

Agar xabar yuborilgandan keyin maxsus sahifaga yo'naltirmoqchi bo'lsangiz:

```html
<input type="hidden" name="redirect" value="https://ozodbek.dev/thank-you">
```

Agar redirect kerak bo'lmasa, bu qatorni o'chirib tashlang.

### 4. Test Qilish

1. Portfolio websiteni oching
2. Contact formani to'ldiring
3. "Send Message" ni bosing
4. Emailingizga xabar kelishi kerak (spam ni tekshiring!)

## 📧 Email Sozlamalari

### Subject ni O'zgartirish

```html
<input type="hidden" name="subject" value="Portfolio Contact - New Message">
```

### From Name

```html
<input type="hidden" name="from_name" value="Portfolio Website">
```

### CC/BCC (Ixtiyoriy)

```html
<input type="hidden" name="cc" value="backup@email.com">
<input type="hidden" name="bcc" value="analytics@email.com">
```

## 🛡️ Spam Himoyasi

### 1. Honeypot (Allaqachon qo'shilgan)

HTML da mavjud:
```html
<input type="checkbox" name="botcheck" class="hidden" style="display: none;">
```

### 2. reCAPTCHA v3 Qo'shish (Ixtiyoriy)

Web3Forms dashboard'da:
1. **Settings** → **Security**
2. **Enable reCAPTCHA v3**
3. Google'dan site key oling
4. HTML ga qo'shing:

```html
<script src="https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY"></script>
<input type="hidden" name="recaptcha_response" id="recaptchaResponse">
```

## 🎨 Custom Email Template

Web3Forms dashboard'da:
1. **Settings** → **Email Template**
2. HTML template'ni customize qiling
3. Mustaqil styling qo'shing

## 📊 Xabarlarni Ko'rish

Web3Forms dashboard'da:
- **Submissions**: Barcha xabarlarni ko'rish
- **Export**: CSV formatda yuklab olish
- **Filter**: Sana bo'yicha filtrlash

## 🔧 Qo'shimcha Sozlamalar

### Auto-response (Javobkor Emaili)

HTML ga qo'shing:
```html
<input type="hidden" name="autoresponse" value="Thank you for your message! I'll get back to you soon.">
```

### Webhook Integration

1. Web3Forms dashboard → **Webhooks**
2. Webhook URL ni qo'shing
3. Har xabar kelganda webhook trigger bo'ladi

### Custom Fields

Istalgan field qo'shishingiz mumkin:
```html
<input type="text" name="phone" placeholder="Phone">
<input type="text" name="company" placeholder="Company">
```

Web3Forms hammasi avtomatik qabul qiladi!

## ❓ Muammolarni Hal Qilish

### Xabar kelmayapti
- ✅ Access key to'g'rimi?
- ✅ Email verify qilganmisiz?
- ✅ Spam papkani tekshiring
- ✅ Browser console'da xato bormi?

### Form submit bo'lmayapti
- ✅ `name` attributelari to'g'rimi?
- ✅ `required` fieldlar to'ldirilganmi?
- ✅ JavaScript xatosi yo'qmi?

### Rate Limit
- Bepul plan: unlimited xabarlar
- Agar juda ko'p spam bo'lsa, captcha yoqing

## 🚀 Production ga Deploy

### 1. Netlify / Vercel

Hech narsa qilish kerak emas! Form avtomatik ishlaydi.

### 2. GitHub Pages

1. GitHub Pages'ni enable qiling
2. `https://yourusername.github.io/My-Partfoliya`
3. Form avtomatik ishlaydi

### 3. Custom Domain

Redirect URL ni yangilang:
```html
<input type="hidden" name="redirect" value="https://ozodbek.dev/thank-you">
```

## 📚 Qo'shimcha Resurslar

- **Documentation**: https://docs.web3forms.com
- **Support**: support@web3forms.com
- **Status**: https://status.web3forms.com

## 🎉 Tayyor!

Endi portfoliongiz backend'siz ishlaydi va barcha xabarlar emailga keladi!

**Afzalliklari:**
- 💰 Bepul
- 🚀 Tez
- 🔒 Xavfsiz
- 📧 Email notification
- 🎯 Oddiy sozlash

---

**Eslatma:** Access key'ni ochiq qo'yishingiz mumkin (frontend'da). Web3Forms uni domain'ga bog'lab qo'yadi, boshqa saytlardan ishlamaydi.
