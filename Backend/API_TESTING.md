# API Testing Guide

## Test Contact Form API

### Health Check
```bash
curl http://127.0.0.1:8000/api/contact/health/
```

Expected Response:
```json
{
  "status": "ok",
  "message": "Portfolio Backend API is running"
}
```

### Send Test Message

```bash
curl -X POST http://127.0.0.1:8000/api/contact/send/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message from API"
  }'
```

Expected Success Response:
```json
{
  "success": true,
  "message": "Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.",
  "data": {
    "id": 1,
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message from API",
    "created_at": "2026-01-27T04:33:57.123456Z",
    "is_read": false
  }
}
```

### Test with Invalid Data

```bash
curl -X POST http://127.0.0.1:8000/api/contact/send/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "A",
    "email": "invalid-email",
    "subject": "",
    "message": "Short"
  }'
```

Expected Error Response:
```json
{
  "success": false,
  "message": "Ma'lumotlarni tekshiring va qaytadan urinib ko'ring.",
  "errors": {
    "name": ["Name must be at least 2 characters long."],
    "email": ["Please enter a valid email address."],
    "subject": ["This field may not be blank."],
    "message": ["Message must be at least 10 characters long."]
  }
}
```

## Using Postman

1. Import as cURL or create new request
2. Set method to POST
3. URL: `http://127.0.0.1:8000/api/contact/send/`
4. Headers: `Content-Type: application/json`
5. Body (raw JSON):
```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "subject": "Contact Subject",
  "message": "Your message here"
}
```

## Admin Panel

Access: http://127.0.0.1:8000/admin/

View all submitted messages, mark as read/unread, and manage contact form submissions.
