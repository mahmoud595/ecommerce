import { Product } from '@/types/product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

export interface WishlistState {
	products: Product[];
}

const initialState: WishlistState = {
	products: [],
};

export const wishlistSlice = createSlice({
	name: 'wishlist',
	initialState,
	reducers: {
		addToWishlist: (state, action: PayloadAction<Product>) => {
			const existingItem = state.products.find(
				item => item.id === action.payload.id
			);
			if (!existingItem) {
				state.products.push(action.payload);
			}
		},
		removeFromWishlist: (state, action: PayloadAction<string>) => {
			state.products = state.products.filter(
				item => item.id !== action.payload
			);
		},
		toggleWishlistItem: (state, action: PayloadAction<Product>) => {
			const existingItem = state.products.find(
				item => item.id === action.payload.id
			);
			if (existingItem) {
				state.products = state.products.filter(
					item => item.id !== action.payload.id
				);
			} else {
				state.products.push(action.payload);
			}
		},
		clearWishlist: state => {
			state.products = [];
		},
	},
});

export const {
	addToWishlist,
	removeFromWishlist,
	clearWishlist,
	toggleWishlistItem,
} = wishlistSlice.actions;

export const selectWishlistProducts = (state: RootState) =>
	state.wishlist.products;
export const selectWishlistProductCount = (state: RootState) =>
	state.wishlist.products.length;
export const selectIsInWishlist = (state: RootState, productId: string) =>
	state.wishlist.products.some((product: Product) => product.id === productId);

export default wishlistSlice.reducer;
