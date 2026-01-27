# Professional Portfolio Website - Python Developer Edition

Modern, professional portfolio website with cyberpunk design and Django REST API backend.

## ✨ Features

- 🎨 Cyberpunk aesthetic with custom cursor
- 🐍 Python/Django developer focused content
- ✨ Smooth animations & transitions
- 📱 Fully responsive design
- 🚀 Fast and optimized
- 💼 ML/AI project showcase
- 📧 Working contact form with email notifications
- 🔐 Django admin panel
- 📊 Python skills & experience sections

## 🛠 Tech Stack

### Frontend
- HTML5, CSS3, Vanilla JavaScript
- Cyberpunk/Neon design theme
- Custom cursor & animations
- CSS Grid & Flexbox
- Particle effects

### Backend
- Python 3.14+
- Django 5.0.1
- Django REST Framework 3.14.0
- SQLite (development)
- SMTP Email integration
- CORS enabled

## 🚀 Getting Started

### Prerequisites
- Python 3.10+ (Python 3.14 recommended)
- pip (Python package manager)

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd Partfoliya
```

2. **Backend Setup**
```bash
cd Backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # macOS/Linux

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create admin user (optional)
python manage.py createsuperuser

# Configure email (edit portfolio_backend/settings.py)
# Update EMAIL_HOST_USER and EMAIL_HOST_PASSWORD

# Start server
python manage.py runserver
# Or use: ./start_server.sh
```

Backend will run on: http://127.0.0.1:8000

3. **Frontend Setup**
```bash
cd Frontend
# Open index.html in your browser
# Or use Live Server extension in VS Code
# Or use Python's simple HTTP server:
python3 -m http.server 8080
```

Frontend will open at: http://localhost:8080

## 📧 Email Configuration

To enable contact form email notifications:

1. **Gmail Setup** (Recommended for testing)
   - Go to Google Account → Security
   - Enable 2-Step Verification
   - Generate App Password (App Passwords section)
   - Copy the 16-digit password

2. **Update Django Settings**

Edit `Backend/portfolio_backend/settings.py`:

```python
EMAIL_HOST_USER = 'your-email@gmail.com'
EMAIL_HOST_PASSWORD = 'your-16-digit-app-password'
RECIPIENT_EMAIL = 'where-to-receive@gmail.com'
```

3. **Test Contact Form**
   - Fill out the contact form on website
   - Check recipient email inbox
   - Check Django admin at http://127.0.0.1:8000/admin/

## 🎨 Customization

### Update Personal Information

**Frontend (`Frontend/index.html`)**
- Name, title, description
- Email, location
- Social media links
- Projects, skills, experience

**Backend Email Settings**
- Configure in `portfolio_backend/settings.py`
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_FROM=your_email@gmail.com

# Admin
ADMIN_NAME=Your Name
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=secure_password

# Frontend URL
FRONTEND_URL=http://localhost:5500
```

## 📁 Project Structure

```
Partfoliya/
├── Frontend/
│   ├── index.html          # Main HTML file
│   ├── index.css           # Styles with animations
│   ├── script.js           # Interactive features
│   └── api.js              # API integration
├── Backend/
│   ├── server.js           # Express server
│   ├── models/             # MongoDB models
│   ├── controllers/        # Route controllers
│   ├── routes/             # API routes
│   ├── middleware/         # Auth & validation
│   ├── config/             # Database config
│   └── utils/              # Utilities (email)
└── README.md
```

## 🎯 Usage

1. **Start Backend Server**
```bash
cd Backend
npm run dev
```
Server runs on `http://localhost:5000`

2. **Open Frontend**
- Open `Frontend/index.html` in browser
- Or use Live Server extension in VS Code

3. **Admin Access**
- Login with credentials from `.env`
- Manage projects, skills, experiences

## 📝 API Endpoints

### Public
- `POST /api/contact` - Send contact message
- `GET /api/projects` - Get all projects
- `GET /api/skills` - Get all skills
- `GET /api/experience` - Get experience timeline

### Admin (Protected)
- `POST /api/auth/login` - Admin login
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project
- `GET /api/contact` - View messages

## 🎨 Customization

### Colors
Edit CSS variables in `Frontend/index.css`:
```css
:root {
    --primary: #00f0ff;
    --secondary: #b537f2;
    --accent: #ff2e97;
}
```

### Content
Update personal information in `Frontend/index.html`

### Backend
Modify models in `Backend/models/` for custom data structures

## 🔒 Security Features

- JWT token authentication
- Password hashing with bcrypt
- Rate limiting on API endpoints
- CORS protection
- Helmet.js security headers
- Input validation
- XSS protection

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use for personal or commercial projects

## 👤 Author

**Ozodbek Tursunpulatov**

---

⭐ If you like this project, please give it a star!
