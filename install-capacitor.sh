#!/bin/bash

echo "🚀 Installing Capacitor for Explori Travel App"
echo "=============================================="

# Make setup script executable
chmod +x setup-capacitor.sh

# Install all dependencies
echo "📦 Installing all dependencies..."
npm install @capacitor/core @capacitor/cli @capacitor/ios @capacitor/app @capacitor/status-bar @capacitor/splash-screen @capacitor/haptics @capacitor/keyboard @capacitor/preferences

echo "✅ Capacitor dependencies installed!"
echo ""
echo "📋 Next steps:"
echo "1. Run './setup-capacitor.sh' to initialize Capacitor"
echo "2. Run 'npm run build:ios' to build and open in Xcode"
echo ""