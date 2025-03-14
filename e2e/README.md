# E2E Testing with Maestro

This directory contains end-to-end tests for The Pet Shop e-commerce app using Maestro.

## Setup

1. Install Maestro CLI:

```bash
curl -Ls "https://get.maestro.mobile.dev" | bash
```

2. Add Maestro to your PATH (if not already done by the installer):

```bash
export PATH="$PATH:$HOME/.maestro/bin"
```

## Running Tests

To run all tests:

```bash
maestro test e2e/flows
```

To run a specific test:

```bash
maestro test e2e/flows/browse_products.yaml
```

## Test Flows

- **browse_products.yaml**: Tests the product browsing functionality
- **product_details.yaml**: Tests viewing product details
- **wishlist.yaml**: Tests adding and removing products from the wishlist

## Adding Test IDs to Components

For Maestro to identify elements in your app, you need to add `testID` props to your components. For example:

```jsx
<View testID="products-list">
	{products.map(product => (
		<TouchableOpacity
			key={product.id}
			testID={`product-card-${product.id}`}
			onPress={() => handlePress(product.id)}
		>
			{/* Product content */}
		</TouchableOpacity>
	))}
</View>
```

## Recording Tests

You can also record tests using Maestro Studio:

```bash
maestro studio
```

This will open a UI where you can record interactions with your app and generate test flows automatically.
