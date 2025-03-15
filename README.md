# The Pet Shop E-Commerce App

## Introduction

The Pet Shop is a modern e-commerce mobile application built with React Native and Expo. This app allows users to browse pet products, view detailed product information, and manage their wishlist. The application features a clean, intuitive user interface with smooth navigation and responsive design.

## Features

- **Product Browsing**: Browse through a catalog of products
- **Product Details**: View detailed information about each product
- **Wishlist Management**: Add/remove products to/from your wishlist
- **Responsive Design**: Works seamlessly on various device sizes

## Demo

Check out our app demos:

### Android Demo

[![Android Demo](https://i.imgur.com/vKb2F1B.png)](https://streamable.com/0bi9u0)
[View Android Demo](https://streamable.com/0bi9u0)

### iOS Demo

[![iOS Demo](https://i.imgur.com/vKb2F1B.png)](https://streamable.com/8b795p)
[View iOS Demo](https://streamable.com/8b795p)

## Technology Stack

- **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/) (file-based routing)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) with [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- **UI Components**: Custom UI components with Expo's built-in libraries
- **Testing**:
  - Unit/Integration Testing: Jest with React Testing Library
  - E2E Testing: Maestro

## Project Structure

- **app/**: Main application code with file-based routing
  - **(tabs)/**: Tab-based navigation
  - **(products)/**: Product listing and details screens
- **components/**: Reusable UI components
- **store/**: Redux store configuration
  - **api/**: API services using RTK Query
  - **slices/**: Redux slices for state management
- **hooks/**: Custom React hooks
- **styles/**: Global styles and theme configuration
- **types/**: TypeScript type definitions
- **assets/**: Images, fonts, and other static assets

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Yarn or npm
- For Android development:
  - Android Studio
  - Android SDK
- For iOS development:
  - Xcode (Mac only)
  - CocoaPods

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/mahmoud595/ecommerce.git
   cd e-commerce
   ```

2. Install dependencies
   ```bash
   yarn install
   # or
   npm install
   ```

### Running the App

#### Start the development server

```bash
yarn start
# or
npm start
```

#### Run on Android

```bash
yarn android
# or
npm run android
```

#### Run on iOS

```bash
yarn ios
# or
npm run ios
```

### Testing

#### Run unit and integration tests

```bash
yarn test
# or
npm test
```

#### Run E2E tests

```bash
yarn test:e2e
# or
npm run test:e2e
```

## Environment Variables

The app uses environment variables for configuration. Create a `.env` file in the root directory with the following variables:

```
API_URL=https://your-api-url.com
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
