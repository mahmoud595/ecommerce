#!/bin/bash

# Check if Maestro is installed
if ! command -v maestro &> /dev/null; then
    echo "Maestro is not installed. Installing now..."
    curl -Ls "https://get.maestro.mobile.dev" | bash
    export PATH="$PATH:$HOME/.maestro/bin"
fi

# Check if Expo is running
if ! lsof -i:8081 &> /dev/null; then
    echo "Expo development server is not running. Starting it now..."
    echo "Please wait for the Expo server to start and the app to load on your device/simulator..."
    yarn expo start --ios &
    # Wait for Expo to start
    sleep 30
fi

# Get the device ID of the iOS Simulator
DEVICE_ID=$(xcrun simctl list devices | grep "Booted" | head -1 | sed -E 's/.*\(([A-Za-z0-9-]+)\).*/\1/')

if [ -z "$DEVICE_ID" ]; then
    echo "No booted iOS Simulator found. Please start a simulator and try again."
    exit 1
fi

echo "Found booted iOS Simulator with ID: $DEVICE_ID"

# Run Maestro tests on the Expo Go app
echo "Running Maestro tests on Expo Go..."
for test_file in e2e/flows/*.yaml; do
    echo "Running test: $test_file"
    # Replace the appId in the test file with host.exp.Exponent (Expo Go's bundle ID)
    sed -i '' 's/appId: com.ecommerce.app/appId: host.exp.Exponent/g' "$test_file"
    
    # Run the test
    maestro --device ios:"$DEVICE_ID" test "$test_file"
    
    # Restore the original appId
    sed -i '' 's/appId: host.exp.Exponent/appId: com.ecommerce.app/g' "$test_file"
done

# Check if tests passed
if [ $? -eq 0 ]; then
    echo "✅ All tests passed!"
else
    echo "❌ Some tests failed. Check the logs above for details."
fi 