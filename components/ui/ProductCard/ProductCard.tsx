import {
	borderRadius,
	colors,
	shadows,
	spacing,
	typography,
} from '@/styles/theme';
import { Product } from '@/types/product';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '../Text';
interface ProductCardProps {
	product: Product;
	onPress?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
	return (
		<TouchableOpacity
			style={styles.card}
			onPress={onPress}
			activeOpacity={0.9}
			testID={`product-card-${product.id}`}
		>
			<View style={styles.imageContainer}>
				<Image
					source={{ uri: product.thumbnail }}
					style={styles.image}
					resizeMode="cover"
				/>
			</View>

			<View style={styles.content}>
				<Text style={styles.title} numberOfLines={1}>
					{product.title}
				</Text>
				<View style={styles.priceRow}>
					<Text style={styles.price} testID={`product-price-${product.id}`}>
						${product.price.toFixed(2)}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: colors.background.default,
		borderRadius: borderRadius.md,
		overflow: 'hidden',
		...shadows.md,
		width: '48%',
		marginBottom: spacing.spacing.md,
	},
	imageContainer: {
		position: 'relative',
		height: spacing.spacing['8xl'],
	},
	image: {
		width: '100%',
		height: '100%',
	},
	wishlistButton: {
		position: 'absolute',
		top: spacing.spacing.md,
		right: spacing.spacing.md,
		backgroundColor: colors.background.default,
		borderRadius: borderRadius.lg,
	},
	content: {
		padding: spacing.spacing.md,
	},
	brand: {
		fontSize: typography.variant.body2.fontSize,
		color: colors.text.secondary,
		marginBottom: spacing.spacing.sm,
	},
	title: {
		fontSize: typography.variant.body2.fontSize,
		fontWeight: typography.variant.body2.fontWeight,
		color: colors.text.primary,
		marginBottom: spacing.spacing.sm,
	},
	priceRow: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	price: {
		fontSize: typography.variant.body2.fontSize,
		fontWeight: typography.variant.body2.fontWeight,
		color: colors.primary[500],
	},
	addButton: {
		backgroundColor: colors.primary[100],
		width: spacing.spacing.xl,
		height: spacing.spacing.xl,
		borderRadius: borderRadius.full,
		justifyContent: 'center',
		alignItems: 'center',
	},
	addButtonText: {
		color: colors.common.white,
		fontSize: typography.variant.body2.fontSize,
		fontWeight: typography.variant.body2.fontWeight,
		lineHeight: typography.variant.body2.lineHeight,
	},
	ratingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: spacing.spacing.sm,
	},
	rating: {
		color: colors.semantic.warning.main,
	},
});

export default ProductCard;
