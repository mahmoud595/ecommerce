import { colors, spacing } from '@/styles/theme';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../styles/theme/ThemeProvider';
import Text from './ui/Text';

class ErrorCatcher extends React.Component<{
	children: React.ReactNode;
	setError: (error: Error) => void;
}> {
	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error('Error caught by ErrorBoundary:', error, errorInfo);
		this.props.setError(error);
	}

	render() {
		return this.props.children;
	}
}

const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
	const [error, setError] = useState<Error | null>(null);
	const { theme } = useTheme();

	const resetError = () => {
		setError(null);
	};

	if (error) {
		return (
			<View
				style={[
					styles.container,
					{ backgroundColor: theme.colors.background.default },
				]}
			>
				<View
					style={[
						styles.errorCard,
						{
							backgroundColor: theme.colors.background.paper,
							borderRadius: theme.borderRadius.md,
							...theme.shadows.md,
						},
					]}
				>
					<Text variant="h5" style={styles.errorTitle}>
						Something went wrong
					</Text>

					<Text variant="body1" style={styles.errorMessage}>
						{error.message || 'An unexpected error occurred'}
					</Text>

					{error.stack && (
						<View
							style={[
								styles.stackTrace,
								{
									backgroundColor: theme.colors.neutral[100],
									borderRadius: theme.borderRadius.sm,
								},
							]}
						>
							<Text variant="caption" style={styles.stackTraceText}>
								{error.stack.split('\n').slice(0, 3).join('\n')}
							</Text>
						</View>
					)}

					<TouchableOpacity
						style={[
							styles.button,
							{
								backgroundColor: theme.colors.primary[500],
								borderRadius: theme.borderRadius.md,
							},
						]}
						onPress={resetError}
					>
						<Text variant="button" style={styles.buttonText}>
							Try Again
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	return <ErrorCatcher setError={setError}>{children}</ErrorCatcher>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: spacing.padding['xl'].padding,
	},
	errorCard: {
		width: '100%',
		padding: spacing.padding['xl'].padding,
		alignItems: 'center',
	},
	errorTitle: {
		marginBottom: spacing.margin['md'].margin,
		textAlign: 'center',
		color: colors.semantic.error.main,
	},
	errorMessage: {
		marginBottom: spacing.margin['md'].margin,
		textAlign: 'center',
		color: colors.text.primary,
	},
	stackTrace: {
		padding: spacing.padding['md'].padding,
		width: '100%',
		marginBottom: spacing.margin['xl'].margin,
	},
	stackTraceText: {
		fontFamily: 'monospace',
		color: colors.text.secondary,
	},
	button: {
		paddingVertical: spacing.padding['md'].padding,
		paddingHorizontal: spacing.padding['xl'].padding,
		alignItems: 'center',
	},
	buttonText: {
		textTransform: 'uppercase',
		color: colors.common.white,
	},
});

export default ErrorBoundary;
