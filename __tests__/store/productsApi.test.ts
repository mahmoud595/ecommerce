// Mock the config module
import { api } from '../../store/api';
import { productsApi } from '../../store/api/productsApi';
import { setupApiStore } from '../utils/testUtils';

jest.mock('../../config', () => ({
	config: {
		apiUrl: 'https://dummyjson.com',
	},
}));

// Create a proper Response object for fetch
const createMockResponse = (data: any, status = 200, ok = true) => {
	return {
		ok,
		status,
		json: async () => data,
		clone: function () {
			return this;
		},
		headers: new Headers(),
		redirected: false,
		type: 'basic',
		url: '',
		body: null,
		bodyUsed: false,
		arrayBuffer: async () => new ArrayBuffer(0),
		blob: async () => new Blob(),
		formData: async () => new FormData(),
		text: async () => JSON.stringify(data),
	};
};

global.fetch = jest.fn();

describe('Products API', () => {
	let store: any;

	beforeEach(() => {
		jest.clearAllMocks();
		const storeRef = setupApiStore(api);
		store = storeRef.store;
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	it('fetches products successfully', async () => {
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
		];

		const mockResponse = {
			products: mockProducts,
			total: 2,
			skip: 0,
			limit: 10,
		};

		(global.fetch as jest.Mock).mockResolvedValueOnce(
			createMockResponse(mockResponse)
		);

		const result = await store.dispatch(
			productsApi.endpoints.getProducts.initiate({ limit: 10, skip: 0 })
		);

		expect(result.data).toEqual(mockResponse);
		expect(global.fetch).toHaveBeenCalledTimes(1);
	});

	it('handles error when fetching products fails', async () => {
		(global.fetch as jest.Mock).mockResolvedValueOnce(
			createMockResponse({ message: 'Server error' }, 500, false)
		);

		const result = await store.dispatch(
			productsApi.endpoints.getProducts.initiate({ limit: 10, skip: 0 })
		);

		expect(result.error).toBeDefined();
		expect(result.data).toBeUndefined();
	});

	it('fetches a product by ID successfully', async () => {
		const mockProduct = {
			id: '1',
			title: 'Product 1',
			price: 10,
			description: 'Description 1',
			rating: 4.5,
			brand: 'Brand 1',
			thumbnail: 'thumbnail1.jpg',
		};

		(global.fetch as jest.Mock).mockResolvedValueOnce(
			createMockResponse(mockProduct)
		);

		const result = await store.dispatch(
			productsApi.endpoints.getProductById.initiate('1')
		);

		expect(result.data).toEqual(mockProduct);
		expect(global.fetch).toHaveBeenCalledTimes(1);
	});
});
