# Portfolio Backend - Django REST API

Python/Django backend for portfolio contact form functionality.

## Features

- ✅ Contact form API with email notifications
- ✅ Django Admin panel for managing messages
- ✅ SQLite database (easy setup)
- ✅ CORS enabled for frontend integration
- ✅ Input validation and error handling

## Installation

### 1. Activate Virtual Environment

```bash
cd Backend
source venv/bin/activate  # macOS/Linux
```

### 2. Configure Email Settings

Edit `portfolio_backend/settings.py` and update:

```python
EMAIL_HOST_USER = 'your-email@gmail.com'
EMAIL_HOST_PASSWORD = 'your-gmail-app-password'
RECIPIENT_EMAIL = 'your-email@gmail.com'
```

**Gmail App Password yaratish:**
1. Google Account Settings → Security
2. 2-Step Verification ni yoqing
3. App Passwords → Select "Mail" → Generate
4. 16 xonali parolni `EMAIL_HOST_PASSWORD` ga kiriting

### 3. Run Development Server

```bash
python manage.py runserver
```

Server `http://127.0.0.1:8000` da ishga tushadi.

## API Endpoints

### Contact Message
- **POST** `/api/contact/send/`
  - Send contact form message
  - Request body:
    ```json
    {
      "name": "Name",
      "email": "email@example.com",
      "subject": "Subject",
      "message": "Your message here"
    }
    ```

### Health Check
- **GET** `/api/contact/health/`
  - Check if API is running

## Admin Panel

### Create Superuser

```bash
python manage.py createsuperuser
```

Username, email, password kiriting.

### Access Admin

http://127.0.0.1:8000/admin/

Admin panelda contact messages larni ko'rish va boshqarish mumkin.

## Frontend Integration

Frontend `script.js` da API URL allaqachon sozlangan:

```javascript
fetch('http://127.0.0.1:8000/api/contact/send/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, subject, message })
})
```

## Troubleshooting

### CORS Error
CORS already configured in settings.py for:
- http://localhost:3000
- http://127.0.0.1:5500

Add more origins if needed in `CORS_ALLOWED_ORIGINS`.

### Email Not Sending
1. Check Gmail settings and App Password
2. Enable "Less secure app access" if using old Gmail
3. Check spam folder

### Port Already in Use
```bash
python manage.py runserver 8001  # Use different port
```

## Production Deployment

For production:
1. Set `DEBUG = False`
2. Update `SECRET_KEY`
3. Configure proper database (PostgreSQL)
4. Set up proper email service
5. Configure static files
6. Use gunicorn or uwsgi

## Project Structure

```
Backend/
├── portfolio_backend/    # Main project settings
│   ├── settings.py      # Django configuration
│   └── urls.py          # Main URL routing
├── contact/             # Contact app
│   ├── models.py        # ContactMessage model
│   ├── views.py         # API views
│   ├── serializers.py   # DRF serializers
│   ├── admin.py         # Admin configuration
│   └── urls.py          # App URLs
├── manage.py            # Django management
├── requirements.txt     # Python dependencies
└── db.sqlite3          # SQLite database
```

## Tech Stack

- Django 5.0.1
- Django REST Framework 3.14.0
- django-cors-headers 4.3.1
- SQLite (development)
- Python 3.14+
