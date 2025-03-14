import React, { useCallback } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

import NoData from '@/components/ui/NoData';
import Text from '@/components/ui/Text';
import WishListCard from '@/components/ui/WishListCard/';
import { useAppDispatch, useAppSelector } from '@/store';
import {
	clearWishlist,
	removeFromWishlist,
	selectWishlistProductCount,
	selectWishlistProducts,
} from '@/store/slices/wishlistSlice';
import { colors, spacing } from '@/styles/theme';
import { Product } from '@/types/product';

const WishlistScreen: React.FC = () => {
	const dispatch = useAppDispatch();
	const wishlistProducts = useAppSelector(selectWishlistProducts);
	const productsCount = useAppSelector(selectWishlistProductCount);

	const handleRemoveItem = (productId: string) => {
		dispatch(removeFromWishlist(productId));
	};
	const handleClearWishlist = () => {
		dispatch(clearWishlist());
	};
	const renderItem = useCallback(
		({ item }: { item: Product }) => (
			<WishListCard product={item} handleRemoveItem={handleRemoveItem} />
		),
		[]
	);

	if (productsCount === 0) {
		return (
			<NoData
				text="Your wishlist is empty"
				subtext="Add products to your wishlist to see them here"
				icon="heart-outline"
			/>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text variant="h6" fontWeight="bold">
					My Wishlist ({productsCount})
				</Text>
				<TouchableOpacity
					onPress={handleClearWishlist}
					testID="clear-wishlist-button"
				>
					<Text variant="body2" fontWeight="bold" style={styles.clearButton}>
						Clear All
					</Text>
				</TouchableOpacity>
			</View>

			<FlatList
				testID="wishlist-list"
				data={wishlistProducts}
				keyExtractor={item => item.id}
				renderItem={renderItem}
				contentContainerStyle={styles.listContent}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background.default,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: spacing.spacing.xl,
		paddingVertical: spacing.spacing.md,
		borderBottomWidth: 1,
		borderBottomColor: colors.border.light,
	},

	clearButton: {
		color: colors.primary[500],
	},
	listContent: {
		padding: spacing.spacing.xl,
	},
});

export default WishlistScreen;
