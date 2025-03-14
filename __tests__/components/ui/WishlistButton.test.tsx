// Mock the config module
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import WishlistButton from '../../../components/ui/WishlistButton/WishlistButton';
import { toggleWishlistItem } from '../../../store/slices/wishlistSlice';

jest.mock('../../../config', () => ({
	config: {
		apiUrl: 'https://dummyjson.com',
	},
}));

// Mock the Ionicons component
jest.mock('@expo/vector-icons', () => ({
	Ionicons: 'Ionicons',
}));

describe('WishlistButton', () => {
	const mockStore = configureStore([]);
	const mockProduct = {
		id: '1',
		title: 'Test Product',
		price: 99.99,
		description: 'Test description',
		rating: 4.5,
		brand: 'Test Brand',
		thumbnail: 'https://example.com/image.jpg',
	};

	it('renders correctly when product is not in wishlist', () => {
		const store = mockStore({
			wishlist: {
				products: [],
			},
		});

		const { UNSAFE_getByProps } = render(
			<Provider store={store}>
				<WishlistButton product={mockProduct} />
			</Provider>
		);

		// Check that the heart-outline icon is rendered
		expect(UNSAFE_getByProps({ name: 'heart-outline' })).toBeTruthy();
	});

	it('renders correctly when product is in wishlist', () => {
		const store = mockStore({
			wishlist: {
				products: [mockProduct],
			},
		});

		const { UNSAFE_getByProps } = render(
			<Provider store={store}>
				<WishlistButton product={mockProduct} />
			</Provider>
		);

		// Check that the heart icon is rendered
		expect(UNSAFE_getByProps({ name: 'heart' })).toBeTruthy();
	});

	it('dispatches toggleWishlistItem action when pressed', () => {
		const store = mockStore({
			wishlist: {
				products: [],
			},
		});

		const { UNSAFE_getByType } = render(
			<Provider store={store}>
				<WishlistButton product={mockProduct} />
			</Provider>
		);

		// Press the button
		fireEvent.press(UNSAFE_getByType(TouchableOpacity));

		// Check that the correct action was dispatched
		const actions = store.getActions();
		expect(actions).toEqual([toggleWishlistItem(mockProduct)]);
	});
});
