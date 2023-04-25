import axiosInstance from 'utils/instance';
import { CategoriesDataTypes } from './types';

export const getCategoriesService = async (): Promise<CategoriesDataTypes[]> => {
  const response = await axiosInstance.get('categories');
  return response.data;
};