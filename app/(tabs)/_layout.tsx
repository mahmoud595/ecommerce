import { colors, spacing } from '@/styles/theme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: colors.primary[600],
				tabBarShowLabel: true,
				tabBarStyle: {
					backgroundColor: colors.common.white,
				},
				tabBarLabelStyle: {
					fontSize: spacing.spacing.lg,
					fontWeight: 'bold',
				},
			}}
		>
			<Tabs.Screen
				name="(products)"
				options={{
					title: 'Products',
					tabBarIcon: ({ focused }) => (
						<FontAwesome
							size={spacing.spacing['2xl']}
							name="shopping-bag"
							color={focused ? colors.primary[500] : colors.text.disabled}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="wishlist"
				options={{
					title: 'Wishlist',
					tabBarIcon: ({ focused }) => (
						<FontAwesome
							size={spacing.spacing['2xl']}
							name="heart"
							color={focused ? colors.primary[500] : colors.text.disabled}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
