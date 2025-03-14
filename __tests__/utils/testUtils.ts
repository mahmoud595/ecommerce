import { configureStore } from '@reduxjs/toolkit';

export function setupApiStore(api: any, extraReducers?: any) {
	const store = configureStore({
		reducer: {
			[api.reducerPath]: api.reducer,
			...extraReducers,
		},
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(api.middleware),
	});

	return {
		api,
		store,
	};
}
