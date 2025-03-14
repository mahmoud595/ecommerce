import { colors, shadows, spacing } from '@/styles/theme';
import { Product } from '@/types/product';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../store';
import {
	selectIsInWishlist,
	toggleWishlistItem,
} from '../../../store/slices/wishlistSlice';

interface WishlistButtonProps {
	product: Product;
	size?: number;
	color?: string;
	activeColor?: string;
	style?: StyleSheet.NamedStyles<any>;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({
	product,
	size = spacing.spacing['2xl'],
	color = colors.text.disabled,
	activeColor = colors.primary[500],
	style = {},
}) => {
	const dispatch = useAppDispatch();
	const isInWishlist = useAppSelector(state =>
		selectIsInWishlist(state, product.id)
	);

	const handleToggleWishlist = () => {
		dispatch(toggleWishlistItem(product));
	};

	return (
		<TouchableOpacity
			style={[styles.button, style]}
			onPress={handleToggleWishlist}
			activeOpacity={0.7}
			testID="wishlist-button"
		>
			<Ionicons
				name={isInWishlist ? 'heart' : 'heart-outline'}
				size={size}
				color={isInWishlist ? activeColor : color}
				testID={isInWishlist ? 'heart-icon-filled' : 'heart-icon-outline'}
			/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		padding: spacing.spacing.md,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.background.default,
		...shadows.md,
	},
});

export default WishlistButton;
