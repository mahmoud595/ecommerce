/**
 * Color palette for the application theme
 */

// Primary colors
const primary = {
	50: '#E6F7FF',
	100: '#BAE7FF',
	200: '#91D5FF',
	300: '#69C0FF',
	400: '#40A9FF',
	500: '#1890FF', // Main primary color
	600: '#096DD9',
	700: '#0050B3',
	800: '#003A8C',
	900: '#002766',
};

// Neutral colors (grays)
const neutral = {
	50: '#FAFAFA',
	100: '#F5F5F5',
	200: '#EEEEEE',
	300: '#E0E0E0',
	400: '#BDBDBD',
	500: '#9E9E9E',
	600: '#757575',
	700: '#616161',
	800: '#424242',
	900: '#212121',
};

// Semantic colors
const semantic = {
	success: {
		light: '#B7EB8F',
		main: '#52C41A',
		dark: '#389E0D',
	},
	warning: {
		light: '#FFE58F',
		main: '#FAAD14',
		dark: '#D48806',
	},
	error: {
		light: '#FFA39E',
		main: '#FF4D4F',
		dark: '#CF1322',
	},
	info: {
		light: '#91D5FF',
		main: '#1890FF',
		dark: '#096DD9',
	},
};

// Common colors
const common = {
	white: '#FFFFFF',
	black: '#000000',
	transparent: 'transparent',
};

// Background colors
const background = {
	default: common.white,
	paper: neutral[50],
	subtle: neutral[100],
};

// Text colors
const text = {
	primary: neutral[900],
	secondary: neutral[700],
	disabled: neutral[500],
	hint: neutral[400],
};

// Border colors
const border = {
	light: neutral[200],
	main: neutral[300],
	dark: neutral[400],
};

// Action colors
const action = {
	active: neutral[600],
	hover: neutral[100],
	selected: neutral[200],
	disabled: neutral[300],
	disabledBackground: neutral[200],
	focus: primary[100],
};

const colors = {
	primary,
	neutral,
	semantic,
	common,
	background,
	text,
	border,
	action,
};

export default colors;
