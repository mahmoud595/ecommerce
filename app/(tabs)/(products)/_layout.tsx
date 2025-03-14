import { Stack } from 'expo-router';

export default function ProductsLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
				presentation: 'containedModal',
			}}
		>
			<Stack.Screen name="index" options={{ title: 'Products' }} />
			<Stack.Screen name="[productId]" options={{ title: 'Product' }} />
		</Stack>
	);
}
