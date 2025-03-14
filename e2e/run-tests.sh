#!/bin/bash

# Check if Maestro is installed
if ! command -v maestro &> /dev/null; then
    echo "Maestro is not installed. Installing now..."
    curl -Ls "https://get.maestro.mobile.dev" | bash
    export PATH="$PATH:$HOME/.maestro/bin"
fi

# Check if Expo is running
if ! lsof -i:19000 &> /dev/null; then
    echo "Expo development server is not running. Starting it now..."
    echo "Please wait for the Expo server to start and the app to load on your device/simulator..."
    yarn expo start --ios &
    # Wait for Expo to start
    sleep 30
fi

# Run all tests
echo "Running Maestro tests..."
maestro test e2e/flows

# Check if tests passed
if [ $? -eq 0 ]; then
    echo "✅ All tests passed!"
else
    echo "❌ Some tests failed. Check the logs above for details."
fi 