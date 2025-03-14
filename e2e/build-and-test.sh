#!/bin/bash

# Check if Maestro is installed
if ! command -v maestro &> /dev/null; then
    echo "Maestro is not installed. Installing now..."
    curl -Ls "https://get.maestro.mobile.dev" | bash
    export PATH="$PATH:$HOME/.maestro/bin"
fi

# Build the native app
echo "Building native app for testing..."
yarn expo prebuild --platform ios --clean
cd ios && pod install && cd ..

# Build the iOS app
echo "Building iOS app..."
cd ios
xcodebuild -workspace e-commerce.xcworkspace -scheme e-commerce -configuration Debug -sdk iphonesimulator -derivedDataPath build
cd ..

# Get the path to the built app
APP_PATH="ios/build/Build/Products/Debug-iphonesimulator/e-commerce.app"

# Check if the app was built successfully
if [ ! -d "$APP_PATH" ]; then
    echo "❌ Failed to build the app. Check the logs above for details."
    exit 1
fi

echo "✅ App built successfully at $APP_PATH"

# Get the device ID of the iOS Simulator
DEVICE_ID=$(xcrun simctl list devices | grep "Booted" | head -1 | sed -E 's/.*\(([A-Za-z0-9-]+)\).*/\1/')

if [ -z "$DEVICE_ID" ]; then
    echo "No booted iOS Simulator found. Please start a simulator and try again."
    exit 1
fi

echo "Found booted iOS Simulator with ID: $DEVICE_ID"

# Install the app on the simulator
echo "Installing app on simulator..."
xcrun simctl install "$DEVICE_ID" "$APP_PATH"

# Run Maestro tests
echo "Running Maestro tests..."
maestro test e2e/flows

# Check if tests passed
if [ $? -eq 0 ]; then
    echo "✅ All tests passed!"
else
    echo "❌ Some tests failed. Check the logs above for details."
fi 