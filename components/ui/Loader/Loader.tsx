import { useTheme } from '@/styles/theme/ThemeProvider';
import React from 'react';
import { ActivityIndicator } from 'react-native';

const Loader = ({ size = 'large' }: { size?: 'small' | 'large' }) => {
	const { theme } = useTheme();
	return <ActivityIndicator size={size} color={theme.colors.primary[500]} />;
};

export default Loader;
