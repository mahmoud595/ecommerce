import { PaginatedDataResponse } from './paginatedDataResponse';

export interface Product {
	id: string;
	title: string;
	description: string;
	price: number;
	rating: number;
	brand: string;
	thumbnail: string;
}
export type ProductResponse = PaginatedDataResponse<Product>;
