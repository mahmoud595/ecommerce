import { colors } from '@/styles/theme';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Loader from '../Loader/Loader';

type PageLoaderProps = {
	containerStyle?: ViewStyle;
};
const PageLoader = ({ containerStyle }: PageLoaderProps) => {
	return (
		<View
			style={[
				styles.loadingContainer,
				{ backgroundColor: colors.background.default },
				containerStyle,
			]}
		>
			<Loader />
		</View>
	);
};

const styles = StyleSheet.create({
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
export default PageLoader;
