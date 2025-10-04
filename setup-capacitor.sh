#!/bin/bash

echo "🚀 Setting up Capacitor for Explori Travel App"
echo "=============================================="

# Install dependencies
echo "📦 Installing Capacitor dependencies..."
npm install

# Build the app first
echo "🔨 Building the React app..."
npm run build

# Initialize Capacitor (if not already done)
echo "⚡ Initializing Capacitor..."
npx cap init "Explori" "com.explori.travelapp" --web-dir=dist

# Add iOS platform
echo "📱 Adding iOS platform..."
npx cap add ios

# Copy web assets to native project
echo "📋 Copying web assets..."
npx cap copy

# Sync the project
echo "🔄 Syncing project..."
npx cap sync

echo ""
echo "✅ Capacitor setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Run 'npm run build:ios' to build and open in Xcode"
echo "2. In Xcode, configure signing & capabilities"
echo "3. Test on iOS Simulator or device"
echo "4. Build for App Store submission"
echo ""
echo "🔧 Useful commands:"
echo "• npm run build:ios    - Build and open in Xcode"
echo "• npm run sync:ios     - Sync changes to iOS"
echo "• npx cap open ios     - Open project in Xcode"
echo ""