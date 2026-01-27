#!/bin/bash

# Portfolio Setup Script
echo "🚀 Portfolio Website Setup"
echo "=========================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found!"
    echo "📥 Install Node.js from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Setup Backend
echo "📦 Setting up Backend..."
cd Backend

# Install dependencies
npm install

# Create .env if not exists
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ Created .env file - Please configure it!"
else
    echo "✅ .env file exists"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Edit Backend/.env with your configuration"
echo "2. Start backend: cd Backend && npm run dev"
echo "3. Open Frontend/index.html in browser"
echo ""
echo "🎉 Happy coding!"
