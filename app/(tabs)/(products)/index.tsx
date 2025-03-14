import Loader from '@/components/ui/Loader/Loader';
import NoData from '@/components/ui/NoData';
import PageLoader from '@/components/ui/PageLoader/PageLoader';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import Text from '@/components/ui/Text';
import usePagination from '@/hooks/usePagination';
import { useGetProductsQuery } from '@/store/api/productsApi';
import { colors, spacing } from '@/styles/theme';
import { useTheme } from '@/styles/theme/ThemeProvider';
import { PaginatedDataResponse } from '@/types/paginatedDataResponse';
import { Product } from '@/types/product';
import { router } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';

const ITEMS_PER_PAGE = 10;

const Products = () => {
	const { theme } = useTheme();
	const [skip, setSkip] = useState(0);

	const {
		data = { products: [], total: 0, skip: 0, limit: 0 },
		isLoading,
		isFetching,
		refetch,
		isError,
	} = useGetProductsQuery({
		limit: ITEMS_PER_PAGE,
		skip,
	});
	const {
		hasMore,
		isLoadingMore,
		handleLoadMore,
		handleRefresh,
		allData: allProducts,
	} = usePagination<Product>({
		itemKey: 'products',
		data: data as PaginatedDataResponse<Product>,
		isLoading,
		isFetching,
		setSkip,
		ITEMS_PER_PAGE,
		skip,
		refetch,
	});

	const renderFooter = useCallback(() => {
		if (isLoadingMore) {
			return (
				<View style={styles.footerContainer}>
					<Loader />
				</View>
			);
		}

		if (!hasMore && allProducts.length > 0) {
			return (
				<View style={styles.footerContainer}>
					<Text variant="body2">No more products to load</Text>
				</View>
			);
		}

		return null;
	}, [isLoadingMore, hasMore, allProducts]);

	const renderItem = useCallback(
		({ item }: { item: Product }) => (
			<ProductCard
				product={item}
				onPress={() => router.push(`/(tabs)/(products)/${item.id}`)}
			/>
		),
		[]
	);

	if (isLoading && skip === 0) {
		return <PageLoader />;
	}

	if (isError) {
		return (
			<View
				style={[
					styles.errorContainer,
					{ backgroundColor: theme.colors.background.default },
				]}
			>
				<NoData
					text="Error loading products"
					subtext={'Something went wrong'}
					icon="alert-circle-outline"
				/>
			</View>
		);
	}

	if (data.products.length === 0 && !isFetching && !isLoading) {
		return (
			<View
				style={[
					styles.emptyContainer,
					{ backgroundColor: colors.background.default },
				]}
			>
				<NoData text="No products found" subtext="" icon="pricetags-outline" />
			</View>
		);
	}

	return (
		<FlatList
			testID="products-list"
			data={allProducts}
			renderItem={renderItem}
			keyExtractor={item => item.id.toString()}
			contentContainerStyle={styles.container}
			numColumns={2}
			showsVerticalScrollIndicator={false}
			columnWrapperStyle={styles.columnWrapper}
			refreshControl={
				<RefreshControl
					refreshing={isFetching && skip === 0}
					onRefresh={handleRefresh}
					colors={[theme.colors.primary[500]]}
					tintColor={theme.colors.primary[500]}
				/>
			}
			onEndReached={handleLoadMore}
			onEndReachedThreshold={0.3}
			ListFooterComponent={renderFooter}
			initialNumToRender={ITEMS_PER_PAGE}
			maxToRenderPerBatch={ITEMS_PER_PAGE}
			windowSize={5}
			removeClippedSubviews={true}
			updateCellsBatchingPeriod={50}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: spacing.spacing.container,
		paddingBottom: spacing.spacing.container * 2,
	},
	columnWrapper: {
		justifyContent: 'space-between',
		marginBottom: spacing.spacing.md,
	},
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	emptyContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	errorContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	footerContainer: {
		paddingVertical: spacing.spacing.xl,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Products;
