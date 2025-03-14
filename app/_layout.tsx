import { ThemeProvider } from '@/styles/theme/ThemeProvider';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ErrorBoundary from '../components/ErrorBoundary';
import ReduxProvider from '../store/ReduxProvider';

export default function RootLayout() {
	return (
		<ThemeProvider>
			<ErrorBoundary>
				<SafeAreaProvider>
					<ReduxProvider>
						<Stack>
							<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
						</Stack>
					</ReduxProvider>
				</SafeAreaProvider>
			</ErrorBoundary>
		</ThemeProvider>
	);
}
