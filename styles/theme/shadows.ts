/**
 * Shadow and elevation styles for the application theme
 */
import { Platform, ViewStyle } from 'react-native';
import colors from './colors';

// Shadow styles for iOS
const iosShadows = {
	none: {
		shadowColor: colors.common.transparent,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0,
		shadowRadius: 0,
	},
	xs: {
		shadowColor: colors.common.black,
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.05,
		shadowRadius: 1,
	},
	sm: {
		shadowColor: colors.common.black,
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
	},
	md: {
		shadowColor: colors.common.black,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
	},
	lg: {
		shadowColor: colors.common.black,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.1,
		shadowRadius: 6,
	},
	xl: {
		shadowColor: colors.common.black,
		shadowOffset: { width: 0, height: 6 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
	},
	'2xl': {
		shadowColor: colors.common.black,
		shadowOffset: { width: 0, height: 8 },
		shadowOpacity: 0.1,
		shadowRadius: 10,
	},
	'3xl': {
		shadowColor: colors.common.black,
		shadowOffset: { width: 0, height: 12 },
		shadowOpacity: 0.1,
		shadowRadius: 14,
	},
};

// Elevation values for Android
const androidElevations = {
	none: 0,
	xs: 1,
	sm: 2,
	md: 4,
	lg: 6,
	xl: 8,
	'2xl': 12,
	'3xl': 16,
};

// Combined shadow styles for both platforms
const getShadow = (level: keyof typeof iosShadows): ViewStyle => {
	if (Platform.OS === 'ios') {
		return iosShadows[level];
	} else {
		return {
			elevation: androidElevations[level],
		};
	}
};

const shadows = {
	none: getShadow('none'),
	xs: getShadow('xs'),
	sm: getShadow('sm'),
	md: getShadow('md'),
	lg: getShadow('lg'),
	xl: getShadow('xl'),
	'2xl': getShadow('2xl'),
	'3xl': getShadow('3xl'),
	getShadow,
};

export default shadows;
