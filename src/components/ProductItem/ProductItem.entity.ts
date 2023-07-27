import {ProductType} from '../../entity/product.type';

export type ProductItemProps = {
  product: ProductType;
  onProductClick: (product: ProductType) => void;
};
