import axiosInstance from 'utils/instance';
import { ProductsDataTypes } from './types';

export const getProductsService = async ( categoryId?: number ): Promise<ProductsDataTypes[]> => {
  const response = await axiosInstance.get('products', { params: { categoryId } });
  return response.data;
};