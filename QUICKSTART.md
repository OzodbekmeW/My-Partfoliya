# Quick Start Guide - Python Developer Portfolio

## Tezkor Ishga Tushirish

### 1. Python O'rnatish
Python 3.10+ kerak (3.14 tavsiya etiladi):
```bash
python3 --version
```

### 2. Backend Ishga Tushirish

```bash
cd Backend

# Virtual environment yaratish
python3 -m venv venv
source venv/bin/activate  # macOS/Linux

# Paketlarni o'rnatish
pip install -r requirements.txt

# Database migratsiya
python manage.py migrate

# Server ishga tushirish
python manage.py runserver
```

Yoki avtomatik script:
```bash
cd Backend
./start_server.sh
```

Backend: `http://127.0.0.1:8000`

### 3. Frontend Ochish

```bash
cd Frontend
# index.html ni brauzerda oching
# Yoki:
python3 -m http.server 8080
```

Frontend: `http://localhost:8080`

### 4. Email Sozlash (Ixtiyoriy)

`Backend/portfolio_backend/settings.py` da:
```python
EMAIL_HOST_USER = 'your-email@gmail.com'
EMAIL_HOST_PASSWORD = 'your-gmail-app-password'
RECIPIENT_EMAIL = 'your-email@gmail.com'
```

**Gmail App Password:**
1. Google Account → Security → 2-Step Verification
2. App Passwords → Generate
3. 16 xonali parolni nusxa oling

### 5. Admin Panel

```bash
# Superuser yaratish
python manage.py createsuperuser
```

Admin: `http://127.0.0.1:8000/admin/`

---

## Xususiyatlar

✅ Python/Django developer portfolio
✅ Cyberpunk dizayni
✅ Custom cursor animatsiyasi
✅ Django REST API backend
✅ Contact form email bilan
✅ Admin panel
✅ ML/AI projects showcase
✅ Admin panel (login kerak)
✅ To'liq responsive

## Texnologiyalar

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express, MongoDB
- **Xavfsizlik:** JWT, Helmet, CORS
- **Email:** Nodemailer

---

**Muallif:** Ozodbek Tursunpulatov
