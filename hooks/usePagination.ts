import { PaginatedDataResponse } from '@/types/paginatedDataResponse';
import { useCallback, useEffect, useState } from 'react';

const usePagination = <T>({
	itemKey,
	data,
	isLoading,
	isFetching,
	setSkip,
	ITEMS_PER_PAGE,
	skip,
	refetch,
}: {
	itemKey: keyof PaginatedDataResponse<T>;
	data: PaginatedDataResponse<T>;
	isLoading: boolean;
	isFetching: boolean;
	setSkip: React.Dispatch<React.SetStateAction<number>>;
	ITEMS_PER_PAGE: number;
	skip: number;
	refetch: () => void;
}) => {
	const [hasMore, setHasMore] = useState(true);
	const [isLoadingMore, setIsLoadingMore] = useState(false);
	const [allData, setAllData] = useState<T[]>([]);
	useEffect(() => {
		if (data.total) {
			setHasMore(skip + ITEMS_PER_PAGE < data.total);
		}
	}, [skip, data.total, ITEMS_PER_PAGE]);

	const handleLoadMore = useCallback(() => {
		if (!isLoading && !isFetching && hasMore && !isLoadingMore) {
			setIsLoadingMore(true);
			setSkip(prevSkip => prevSkip + ITEMS_PER_PAGE);
		}
	}, [isLoading, isFetching, hasMore, isLoadingMore, ITEMS_PER_PAGE]);

	const handleRefresh = useCallback(() => {
		setSkip(0);
		setHasMore(true);
		refetch();
	}, []);

	useEffect(() => {
		if (data && data[itemKey] && data[itemKey].length > 0) {
			if (skip === 0) {
				setAllData(data[itemKey]);
			} else {
				const newItems = (data[itemKey] as any[]).filter(
					(newItem: any) => !allData.some((item: any) => item.id === newItem.id)
				);

				if (newItems.length > 0) {
					setAllData(prev => [...prev, ...newItems]);
				}
			}

			setIsLoadingMore(false);
		}
	}, [data, skip, ITEMS_PER_PAGE]);

	return {
		hasMore,
		isLoadingMore,
		handleLoadMore,
		handleRefresh,
		allData,
	};
};

export default usePagination;
