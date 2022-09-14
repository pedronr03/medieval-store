export type IOrder = {
  userId: number,
  productsIds: number[]
};

export type Order = {
  id: number
} & IOrder;