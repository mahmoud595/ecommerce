import { Product, ProductResponse } from '@/types/product';
import { api } from './index';

export const productsApi = api.injectEndpoints({
	endpoints: builder => ({
		getProducts: builder.query<
			ProductResponse,
			{ limit: number; skip: number }
		>({
			query: ({ limit = 10, skip = 0 }) =>
				`/products?limit=${limit}&skip=${skip}`,
			providesTags: ['Products'],
			// Always refetch when skip changes
			forceRefetch: ({ currentArg, previousArg }) => {
				return currentArg?.skip !== previousArg?.skip;
			},
		}),

		getProductById: builder.query<Product, string>({
			query: id => `/products/${id}`,
			providesTags: (_, __, id) => [{ type: 'Products', id }],
		}),
	}),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
