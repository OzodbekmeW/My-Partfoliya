#!/bin/bash

# Django Backend Server Starter Script

echo "🐍 Starting Django Backend Server..."
echo "=================================="

cd "$(dirname "$0")"

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "❌ Virtual environment not found!"
    echo "Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
source venv/bin/activate

# Install/update dependencies
echo "📦 Checking dependencies..."
pip install -q -r requirements.txt

# Run migrations
echo "🔄 Running migrations..."
python manage.py migrate --no-input

# Start server
echo "✅ Starting server on http://127.0.0.1:8000"
echo "Press CTRL+C to stop"
echo "=================================="
python manage.py runserver
