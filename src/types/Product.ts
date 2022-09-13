export type IProduct = {
  name: string
  amount: string
};

export type Product = {
  id: number
} & IProduct;
