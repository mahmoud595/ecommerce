/**
 * Main theme configuration for the application
 */
import borderRadius from './borderRadius';
import colors from './colors';
import shadows from './shadows';
import spacing from './spacing';
import typography from './typography';
import zIndex from './zIndex';

// Light theme
const lightTheme = {
	colors: {
		...colors,
		background: {
			...colors.background,
			default: colors.common.white,
			paper: colors.neutral[50],
		},
		text: {
			...colors.text,
			primary: colors.neutral[600],
			secondary: colors.neutral[700],
			default: colors.common.black,
		},
	},
	typography,
	spacing,
	shadows,
	borderRadius,
	zIndex,
};

// Dark theme
const darkTheme = {
	colors: {
		...colors,
		background: {
			...colors.background,
			default: colors.neutral[900],
			paper: colors.neutral[800],
		},
		text: {
			...colors.text,
			primary: colors.neutral[600],
			secondary: colors.neutral[300],
			default: colors.common.white,
		},
	},
	typography,
	spacing,
	shadows,
	borderRadius,
	zIndex,
};

// Default theme
const theme = lightTheme;

export { darkTheme, lightTheme, theme };
export default theme;
