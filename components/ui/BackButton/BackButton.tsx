import { colors, shadows, spacing, zIndex } from '@/styles/theme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const BackButton = () => {
	return (
		<TouchableOpacity
			onPress={() => router.back()}
			style={styles.backButton}
			testID="back-button"
		>
			<Ionicons name="arrow-back" size={24} color="black" />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	backButton: {
		padding: spacing.spacing.sm,
		backgroundColor: colors.background.default,
		borderRadius: spacing.spacing.sm,
		zIndex: zIndex.sticky,
		...shadows.md,
	},
});

export default BackButton;
