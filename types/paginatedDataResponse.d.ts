export interface PaginatedDataResponse<T> {
	total: number;
	skip: number;
	limit: number;
	[key: string]: T[];
}
