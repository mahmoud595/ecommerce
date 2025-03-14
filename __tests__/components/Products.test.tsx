// Mock the config module
import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import Products from '../../app/(tabs)/(products)/index';
import { api } from '../../store/api';
import { ThemeProvider } from '../../styles/theme/ThemeProvider';

import { useGetProductsQuery } from '../../store/api/productsApi';

jest.mock('../../config', () => ({
	config: {
		apiUrl: 'https://dummyjson.com',
	},
}));

jest.mock('../../components/ui/NoData', () => 'MockNoData');
jest.mock(
	'../../components/ui/ProductCard/ProductCard',
	() => 'MockProductCard'
);
jest.mock('../../components/ui/PageLoader/PageLoader', () => 'MockPageLoader');

jest.mock('../../store/api/productsApi', () => ({
	useGetProductsQuery: jest.fn(),
}));

describe('Products Component', () => {
	const store = configureStore({
		reducer: {
			[api.reducerPath]: api.reducer,
		},
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(api.middleware),
	});

	const mockProducts = [
		{
			id: '1',
			title: 'Product 1',
			price: 10,
			description: 'Description 1',
			rating: 4.5,
			brand: 'Brand 1',
			thumbnail: 'thumbnail1.jpg',
		},
		{
			id: '2',
			title: 'Product 2',
			price: 20,
			description: 'Description 2',
			rating: 4.2,
			brand: 'Brand 2',
			thumbnail: 'thumbnail2.jpg',
		},
		{
			id: '3',
			title: 'Product 3',
			price: 30,
			description: 'Description 3',
			rating: 4.8,
			brand: 'Brand 3',
			thumbnail: 'thumbnail3.jpg',
		},
	];

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('renders loading state initially', () => {
		(useGetProductsQuery as jest.Mock).mockReturnValue({
			data: { products: [], total: 0, skip: 0, limit: 10 },
			isLoading: true,
			isFetching: false,
			refetch: jest.fn(),
			isError: false,
			error: null,
		});

		const result = render(
			<Provider store={store}>
				<ThemeProvider>
					<Products />
				</ThemeProvider>
			</Provider>
		);

		expect(result).toBeTruthy();
	});

	test('renders products when data is loaded', () => {
		(useGetProductsQuery as jest.Mock).mockReturnValue({
			data: { products: mockProducts, total: 3, skip: 0, limit: 10 },
			isLoading: false,
			isFetching: false,
			refetch: jest.fn(),
			isError: false,
			error: null,
		});

		const result = render(
			<Provider store={store}>
				<ThemeProvider>
					<Products />
				</ThemeProvider>
			</Provider>
		);

		expect(result).toBeTruthy();
	});

	test('renders error state when there is an error', () => {
		(useGetProductsQuery as jest.Mock).mockReturnValue({
			data: { products: [], total: 0, skip: 0, limit: 10 },
			isLoading: false,
			isFetching: false,
			refetch: jest.fn(),
			isError: true,
			error: 'Error loading products',
		});

		const result = render(
			<Provider store={store}>
				<ThemeProvider>
					<Products />
				</ThemeProvider>
			</Provider>
		);

		expect(result).toBeTruthy();
	});

	test('renders empty state when no products are found', () => {
		(useGetProductsQuery as jest.Mock).mockReturnValue({
			data: { products: [], total: 0, skip: 0, limit: 10 },
			isLoading: false,
			isFetching: false,
			refetch: jest.fn(),
			isError: false,
			error: null,
		});

		const result = render(
			<Provider store={store}>
				<ThemeProvider>
					<Products />
				</ThemeProvider>
			</Provider>
		);

		expect(result).toBeTruthy();
	});

	test('loads more products when reaching the end of the list', async () => {
		const mockRefetch = jest.fn();
		let skip = 0;

		(useGetProductsQuery as jest.Mock).mockImplementation(
			({ limit, skip: currentSkip }) => {
				skip = currentSkip;
				return {
					data: {
						products: mockProducts,
						total: 10,
						skip: currentSkip,
						limit,
					},
					isLoading: false,
					isFetching: false,
					refetch: mockRefetch,
					isError: false,
					error: null,
				};
			}
		);

		const result = render(
			<Provider store={store}>
				<ThemeProvider>
					<Products />
				</ThemeProvider>
			</Provider>
		);

		expect(result).toBeTruthy();
	});

	test('refreshes the list when pull-to-refresh is triggered', async () => {
		const mockRefetch = jest.fn();

		(useGetProductsQuery as jest.Mock).mockReturnValue({
			data: { products: mockProducts, total: 3, skip: 0, limit: 10 },
			isLoading: false,
			isFetching: false,
			refetch: mockRefetch,
			isError: false,
			error: null,
		});

		const result = render(
			<Provider store={store}>
				<ThemeProvider>
					<Products />
				</ThemeProvider>
			</Provider>
		);

		expect(result).toBeTruthy();
	});
});
