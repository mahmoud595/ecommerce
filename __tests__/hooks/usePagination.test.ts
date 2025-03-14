import { act, renderHook } from '@testing-library/react-hooks';
import usePagination from '../../hooks/usePagination';
import { Product } from '../../types/product';

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

const createMockData = (
	products: Product[],
	total: number,
	skip: number,
	limit: number
) => {
	return {
		products,
		total,
		skip,
		limit,
	} as any;
};

describe('usePagination', () => {
	const mockSetSkip = jest.fn();
	const mockRefetch = jest.fn();
	const ITEMS_PER_PAGE = 3;

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('should initialize with correct values', () => {
		const { result } = renderHook(() =>
			usePagination({
				itemKey: 'products',
				data: createMockData(mockProducts, 5, 0, ITEMS_PER_PAGE),
				isLoading: false,
				isFetching: false,
				setSkip: mockSetSkip,
				ITEMS_PER_PAGE,
				skip: 0,
				refetch: mockRefetch,
			})
		);

		expect(result.current.hasMore).toBe(true);
		expect(result.current.isLoadingMore).toBe(false);
		expect(result.current.allData).toEqual(mockProducts);
	});

	test('should update hasMore when total is less than or equal to loaded items', () => {
		const { result } = renderHook(() =>
			usePagination({
				itemKey: 'products',
				data: createMockData(mockProducts, 3, 0, ITEMS_PER_PAGE),
				isLoading: false,
				isFetching: false,
				setSkip: mockSetSkip,
				ITEMS_PER_PAGE,
				skip: 0,
				refetch: mockRefetch,
			})
		);

		expect(result.current.hasMore).toBe(false);
	});

	test('should handle load more correctly', () => {
		const { result } = renderHook(() =>
			usePagination({
				itemKey: 'products',
				data: createMockData(mockProducts, 5, 0, ITEMS_PER_PAGE),
				isLoading: false,
				isFetching: false,
				setSkip: mockSetSkip,
				ITEMS_PER_PAGE,
				skip: 0,
				refetch: mockRefetch,
			})
		);

		act(() => {
			result.current.handleLoadMore();
		});

		expect(mockSetSkip).toHaveBeenCalled();
	});

	test('should not load more when already loading', () => {
		const { result } = renderHook(() =>
			usePagination({
				itemKey: 'products',
				data: createMockData(mockProducts, 5, 0, ITEMS_PER_PAGE),
				isLoading: true,
				isFetching: false,
				setSkip: mockSetSkip,
				ITEMS_PER_PAGE,
				skip: 0,
				refetch: mockRefetch,
			})
		);

		act(() => {
			result.current.handleLoadMore();
		});

		expect(mockSetSkip).not.toHaveBeenCalled();
	});

	test('should not load more when no more items', () => {
		const { result } = renderHook(() =>
			usePagination({
				itemKey: 'products',
				data: createMockData(mockProducts, 3, 0, ITEMS_PER_PAGE),
				isLoading: false,
				isFetching: false,
				setSkip: mockSetSkip,
				ITEMS_PER_PAGE,
				skip: 0,
				refetch: mockRefetch,
			})
		);

		act(() => {
			result.current.handleLoadMore();
		});

		expect(mockSetSkip).not.toHaveBeenCalled();
	});

	test('should handle refresh correctly', () => {
		const { result } = renderHook(() =>
			usePagination({
				itemKey: 'products',
				data: createMockData(mockProducts, 5, 3, ITEMS_PER_PAGE),
				isLoading: false,
				isFetching: false,
				setSkip: mockSetSkip,
				ITEMS_PER_PAGE,
				skip: 3,
				refetch: mockRefetch,
			})
		);

		act(() => {
			result.current.handleRefresh();
		});

		expect(mockSetSkip).toHaveBeenCalledWith(0);
		expect(mockRefetch).toHaveBeenCalled();
	});
});
