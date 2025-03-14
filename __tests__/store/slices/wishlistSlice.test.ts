import wishlistReducer, {
	addToWishlist,
	clearWishlist,
	removeFromWishlist,
	selectIsInWishlist,
	selectWishlistProductCount,
	selectWishlistProducts,
	toggleWishlistItem,
	WishlistState,
} from '../../../store/slices/wishlistSlice';

describe('wishlistSlice', () => {
	const mockProduct1 = {
		id: '1',
		title: 'Test Product 1',
		price: 99.99,
		description: 'Test description 1',
		rating: 4.5,
		brand: 'Test Brand 1',
		thumbnail: 'https://example.com/image1.jpg',
	};

	const mockProduct2 = {
		id: '2',
		title: 'Test Product 2',
		price: 149.99,
		description: 'Test description 2',
		rating: 4.2,
		brand: 'Test Brand 2',
		thumbnail: 'https://example.com/image2.jpg',
	};

	describe('reducers', () => {
		it('should handle initial state', () => {
			expect(wishlistReducer(undefined, { type: 'unknown' })).toEqual({
				products: [],
			});
		});

		it('should handle addToWishlist', () => {
			const initialState: WishlistState = { products: [] };
			const newState = wishlistReducer(
				initialState,
				addToWishlist(mockProduct1)
			);
			expect(newState.products).toEqual([mockProduct1]);
		});

		it('should not add duplicate products with addToWishlist', () => {
			const initialState: WishlistState = { products: [mockProduct1] };
			const newState = wishlistReducer(
				initialState,
				addToWishlist(mockProduct1)
			);
			expect(newState.products).toEqual([mockProduct1]);
		});

		it('should handle removeFromWishlist', () => {
			const initialState: WishlistState = {
				products: [mockProduct1, mockProduct2],
			};
			const newState = wishlistReducer(
				initialState,
				removeFromWishlist(mockProduct1.id)
			);
			expect(newState.products).toEqual([mockProduct2]);
		});

		it('should handle toggleWishlistItem - add product', () => {
			const initialState: WishlistState = { products: [] };
			const newState = wishlistReducer(
				initialState,
				toggleWishlistItem(mockProduct1)
			);
			expect(newState.products).toEqual([mockProduct1]);
		});

		it('should handle toggleWishlistItem - remove product', () => {
			const initialState: WishlistState = { products: [mockProduct1] };
			const newState = wishlistReducer(
				initialState,
				toggleWishlistItem(mockProduct1)
			);
			expect(newState.products).toEqual([]);
		});

		it('should handle clearWishlist', () => {
			const initialState: WishlistState = {
				products: [mockProduct1, mockProduct2],
			};
			const newState = wishlistReducer(initialState, clearWishlist());
			expect(newState.products).toEqual([]);
		});
	});

	describe('selectors', () => {
		const mockState = {
			wishlist: {
				products: [mockProduct1],
			},
		};

		it('should select wishlist products', () => {
			expect(selectWishlistProducts(mockState as any)).toEqual([mockProduct1]);
		});

		it('should select wishlist product count', () => {
			expect(selectWishlistProductCount(mockState as any)).toEqual(1);
		});

		it('should check if product is in wishlist - true', () => {
			expect(selectIsInWishlist(mockState as any, '1')).toBe(true);
		});

		it('should check if product is in wishlist - false', () => {
			expect(selectIsInWishlist(mockState as any, '2')).toBe(false);
		});
	});
});
