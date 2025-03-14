import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import ProductCard from '../../../components/ui/ProductCard/ProductCard';

jest.mock('../../../components/ui/Text', () => 'Text');

describe('ProductCard', () => {
	const mockProduct = {
		id: '1',
		title: 'Test Product',
		price: 99.99,
		description: 'Test description',
		rating: 4.5,
		brand: 'Test Brand',
		thumbnail: 'https://example.com/image.jpg',
	};

	it('renders correctly with product data', () => {
		const { getByText } = render(<ProductCard product={mockProduct} />);

		expect(getByText('Test Product')).toBeTruthy();
		expect(getByText('$99.99')).toBeTruthy();
	});

	it('calls onPress when pressed', () => {
		const onPressMock = jest.fn();
		const { UNSAFE_getByType } = render(
			<ProductCard product={mockProduct} onPress={onPressMock} />
		);

		fireEvent.press(UNSAFE_getByType(TouchableOpacity));
		expect(onPressMock).toHaveBeenCalledTimes(1);
	});
});
