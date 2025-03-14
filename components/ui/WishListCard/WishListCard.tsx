import { borderRadius, colors, shadows, spacing } from '@/styles/theme';
import { Product } from '@/types/product';
import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '../Text';

type WishListCardProps = {
	product: Product;
	handleRemoveItem: (id: string) => void;
};
const WishListCard = ({ product, handleRemoveItem }: WishListCardProps) => {
	return (
		<View style={styles.productCard} testID={`product-card-${product.id}`}>
			<Image
				source={{ uri: product.thumbnail }}
				style={styles.productImage}
				resizeMode="cover"
			/>
			<View style={styles.productDetails}>
				<Text variant="body1" style={styles.productTitle} numberOfLines={1}>
					{product.title}
				</Text>
				<Text variant="body2" color="disabled" style={styles.productBrand}>
					{product.brand}
				</Text>
				<View style={styles.productPriceRow}>
					<Text
						style={styles.productPrice}
						variant="body2"
						testID={`product-price-${product.id}`}
					>
						${product.price.toFixed(2)}
					</Text>
					<TouchableOpacity
						onPress={() => handleRemoveItem(product.id)}
						testID={`remove-wishlist-item-${product.id}`}
					>
						<Ionicons
							name="trash-outline"
							size={18}
							color={colors.text.primary}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	productCard: {
		flexDirection: 'row',
		backgroundColor: colors.background.default,
		borderRadius: borderRadius.md,
		marginBottom: spacing.spacing.xl,
		padding: spacing.spacing.lg,
		...shadows.md,
	},
	productImage: {
		width: spacing.spacing['5xl'],
		height: spacing.spacing['5xl'],
		borderRadius: borderRadius.sm,
		marginRight: spacing.spacing.md,
	},
	productDetails: {
		flex: 1,
		justifyContent: 'space-between',
	},
	productTitle: {
		marginBottom: spacing.spacing.xs,
	},
	productBrand: {
		marginBottom: spacing.spacing.xs,
	},
	productPrice: {
		color: colors.primary[500],
		marginBottom: spacing.spacing.md,
	},
	productActions: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	productPriceRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});
export default WishListCard;
