import { colors, spacing, typography } from '@/styles/theme';
import { useTheme } from '@/styles/theme/ThemeProvider';
import { Ionicons } from '@expo/vector-icons';
import { Button, StyleSheet, View } from 'react-native';
import Text from '../Text';

type NoDataProps = {
	text: string;
	subtext: string;
	icon: keyof typeof Ionicons.glyphMap;
	buttonText?: string;
	onPress?: () => void;
};
const NoData = ({ text, subtext, icon, buttonText, onPress }: NoDataProps) => {
	const theme = useTheme();
	return (
		<View style={styles.emptyContainer}>
			<Ionicons name={icon} size={64} color={theme.theme.colors.text.primary} />
			<Text>{text}</Text>
			<Text>{subtext}</Text>
			{buttonText && onPress && (
				<Button
					onPress={onPress}
					title={buttonText}
					color={colors.primary[500]}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	emptyContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	emptyText: {
		fontSize: typography.variant.h5.fontSize,
		fontWeight: typography.variant.h5.fontWeight,
		color: colors.text.secondary,
		marginTop: spacing.spacing.md,
		marginBottom: spacing.spacing.sm,
	},
	emptySubtext: {
		fontSize: typography.variant.body1.fontSize,
		color: colors.text.secondary,
		textAlign: 'center',
	},
});
export default NoData;
