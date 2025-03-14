import { config } from '@/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = config.apiUrl;

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	tagTypes: ['Products'],
	endpoints: () => ({}),
});

export const { usePrefetch } = api;
