import { CategoryModel } from './category';

export interface ProductModel {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  creationAt: string;
  category: CategoryModel;
}
