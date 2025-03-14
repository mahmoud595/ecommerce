import { setupApiStore } from '../utils/testUtils';

describe('setupApiStore', () => {
	it('should create a store with the API middleware', () => {
		const mockApi = {
			reducerPath: 'test',
			reducer: (state = {}, action: any) => state,
			middleware: jest.fn(() => jest.fn()),
		};

		const result = setupApiStore(mockApi);

		expect(result).toHaveProperty('store');
		expect(result).toHaveProperty('api');
		expect(result.api).toBe(mockApi);
	});
});
