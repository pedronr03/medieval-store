export type IOrder = {
  userId: number,
  productsId: number[]
};

export type Order = {
  id: number
} & IOrder;