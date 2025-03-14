import { theme } from '@/styles/theme';
import { useTheme } from '@/styles/theme/ThemeProvider';
import {
	Text as RNText,
	TextProps as RNTextProps,
	TextStyle,
} from 'react-native';

type TextProps = RNTextProps & {
	children: React.ReactNode;
	color?: keyof typeof theme.colors.text;
	variant?: keyof typeof theme.typography.variant;
	fontWeight?: keyof typeof theme.typography.fontWeight;
	align?: 'left' | 'center' | 'right';
	style?: TextStyle;
};

const Text = ({
	children,
	color = 'primary',
	variant = 'body1',
	fontWeight = 'regular',
	align = 'left',
	style,
	...props
}: TextProps) => {
	const { theme } = useTheme();
	return (
		<RNText
			style={[
				theme.typography.variant[variant],
				{ color: theme.colors.text[color], textAlign: align },
				style,
			]}
			{...props}
		>
			{children}
		</RNText>
	);
};

export default Text;
