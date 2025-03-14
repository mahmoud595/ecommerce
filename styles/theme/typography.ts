/**
 * Typography styles for the application theme
 */
import { TextStyle } from 'react-native';
import unit from '../unit';

// Font families
const fontFamily = {
	regular: 'System',
	medium: 'System',
	semiBold: 'System',
	bold: 'System',
};

// Font weights
const fontWeight = {
	regular: '400' as TextStyle['fontWeight'],
	medium: '500' as TextStyle['fontWeight'],
	semiBold: '600' as TextStyle['fontWeight'],
	bold: '700' as TextStyle['fontWeight'],
};

// Font sizes
const fontSize = {
	xs: 12 * unit,
	sm: 14 * unit,
	md: 16 * unit,
	lg: 18 * unit,
	xl: 20 * unit,
	'2xl': 24 * unit,
	'3xl': 30 * unit,
	'4xl': 36 * unit,
	'5xl': 48 * unit,
	'6xl': 60 * unit,
};

// Line heights
const lineHeight = {
	xs: 16 * unit,
	sm: 20 * unit,
	md: 24 * unit,
	lg: 28 * unit,
	xl: 28 * unit,
	'2xl': 32 * unit,
	'3xl': 36 * unit,
	'4xl': 40 * unit,
	'5xl': 60 * unit,
	'6xl': 72 * unit,
};

// Letter spacing
const letterSpacing = {
	tighter: -0.8,
	tight: -0.4,
	normal: 0,
	wide: 0.4,
	wider: 0.8,
	widest: 1.6,
};

// Text variants
const variant = {
	h1: {
		fontFamily: fontFamily.bold,
		fontWeight: fontWeight.bold,
		fontSize: fontSize['4xl'],
		lineHeight: lineHeight['4xl'],
		letterSpacing: letterSpacing.tight,
	} as TextStyle,
	h2: {
		fontFamily: fontFamily.bold,
		fontWeight: fontWeight.bold,
		fontSize: fontSize['3xl'],
		lineHeight: lineHeight['3xl'],
		letterSpacing: letterSpacing.tight,
	} as TextStyle,
	h3: {
		fontFamily: fontFamily.bold,
		fontWeight: fontWeight.bold,
		fontSize: fontSize['2xl'],
		lineHeight: lineHeight['2xl'],
		letterSpacing: letterSpacing.normal,
	} as TextStyle,
	h4: {
		fontFamily: fontFamily.semiBold,
		fontWeight: fontWeight.semiBold,
		fontSize: fontSize.xl,
		lineHeight: lineHeight.xl,
		letterSpacing: letterSpacing.normal,
	} as TextStyle,
	h5: {
		fontFamily: fontFamily.semiBold,
		fontWeight: fontWeight.semiBold,
		fontSize: fontSize.lg,
		lineHeight: lineHeight.lg,
		letterSpacing: letterSpacing.normal,
	} as TextStyle,
	h6: {
		fontFamily: fontFamily.semiBold,
		fontWeight: fontWeight.semiBold,
		fontSize: fontSize.md,
		lineHeight: lineHeight.md,
		letterSpacing: letterSpacing.normal,
	} as TextStyle,
	subtitle1: {
		fontFamily: fontFamily.medium,
		fontWeight: fontWeight.medium,
		fontSize: fontSize.md,
		lineHeight: lineHeight.md,
		letterSpacing: letterSpacing.normal,
	} as TextStyle,
	subtitle2: {
		fontFamily: fontFamily.medium,
		fontWeight: fontWeight.medium,
		fontSize: fontSize.sm,
		lineHeight: lineHeight.sm,
		letterSpacing: letterSpacing.normal,
	} as TextStyle,
	body1: {
		fontFamily: fontFamily.regular,
		fontWeight: fontWeight.regular,
		fontSize: fontSize.md,
		lineHeight: lineHeight.md,
		letterSpacing: letterSpacing.normal,
	} as TextStyle,
	body2: {
		fontFamily: fontFamily.regular,
		fontWeight: fontWeight.regular,
		fontSize: fontSize.sm,
		lineHeight: lineHeight.sm,
		letterSpacing: letterSpacing.normal,
	} as TextStyle,
	button: {
		fontFamily: fontFamily.medium,
		fontWeight: fontWeight.medium,
		fontSize: fontSize.md,
		lineHeight: lineHeight.md,
		letterSpacing: letterSpacing.wide,
		textTransform: 'uppercase',
	} as TextStyle,
	caption: {
		fontFamily: fontFamily.regular,
		fontWeight: fontWeight.regular,
		fontSize: fontSize.xs,
		lineHeight: lineHeight.xs,
		letterSpacing: letterSpacing.normal,
	} as TextStyle,
	overline: {
		fontFamily: fontFamily.regular,
		fontWeight: fontWeight.regular,
		fontSize: fontSize.xs,
		lineHeight: lineHeight.xs,
		letterSpacing: letterSpacing.wider,
		textTransform: 'uppercase',
	} as TextStyle,
};

const typography = {
	fontFamily,
	fontWeight,
	fontSize,
	lineHeight,
	letterSpacing,
	variant,
};

export default typography;
