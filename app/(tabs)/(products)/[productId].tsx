import BackButton from '@/components/ui/BackButton/BackButton';
import NoData from '@/components/ui/NoData';
import PageLoader from '@/components/ui/PageLoader/PageLoader';
import Text from '@/components/ui/Text';
import WishlistButton from '@/components/ui/WishlistButton';
import { useGetProductByIdQuery } from '@/store/api/productsApi';
import { colors, shadows, spacing } from '@/styles/theme';
import { FontAwesome } from '@expo/vector-icons';
import { router, useGlobalSearchParams } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

const Product = () => {
	const { productId } = useGlobalSearchParams();
	const {
		data: product,
		isLoading,
		isFetching,
		error,
	} = useGetProductByIdQuery(productId as string);
	if (isLoading || isFetching) {
		return <PageLoader />;
	}

	if (error || !product) {
		return (
			<NoData
				text="Product not found"
				subtext="Please try again later"
				icon="pricetags-outline"
				buttonText="Go to products"
				onPress={() => router.push('/(tabs)/(products)')}
			/>
		);
	}
	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			<View style={styles.backButtonContainer}>
				<BackButton />
			</View>

			<Image
				source={{ uri: product?.thumbnail }}
				style={styles.image}
				resizeMode="contain"
			/>
			<View style={styles.priceContainer}>
				<Text variant="body1" style={styles.price}>
					${product?.price}
				</Text>
			</View>
			<View style={styles.contentContainer}>
				<View style={styles.titleContainer}>
					<Text variant="h6">{product?.title}</Text>
					<WishlistButton product={product} />
				</View>
				{product?.brand && (
					<Text variant="body2" style={styles.brand}>
						{product?.brand}
					</Text>
				)}
				<Text variant="body2" align="center">
					{product?.description}
				</Text>
				<View style={styles.ratingContainer}>
					<Text variant="body2" style={styles.ratingText}>
						{product?.rating}
					</Text>
					<FontAwesome
						name="star"
						size={spacing.spacing.lg}
						color={colors.semantic.warning.main}
					/>
				</View>
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background.default,
	},
	backButtonContainer: {
		position: 'absolute',
		top: spacing.spacing.md,
		left: spacing.spacing.md,
	},
	image: {
		width: '100%',
		height: spacing.spacing['64'],
	},
	contentContainer: {
		padding: spacing.spacing.lg,
		gap: spacing.spacing.lg,
	},
	ratingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: spacing.spacing.sm,
		justifyContent: 'flex-end',
	},
	ratingText: {
		color: colors.semantic.warning.main,
	},
	price: {
		color: colors.primary[500],
	},
	priceContainer: {
		position: 'absolute',
		top: spacing.spacing.lg,
		right: spacing.spacing.lg,
		backgroundColor: colors.background.default,
		padding: spacing.spacing.sm,
		borderRadius: spacing.spacing.sm,
		...shadows.md,
	},
	brand: {
		color: colors.semantic.success.main,
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});
export default Product;
