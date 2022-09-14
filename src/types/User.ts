export type UserCredentials = {
  username: string
  password: string
};

export type IUser = {
  username: string
  classe: string
  level: number
  password: string
};

export type User = {
  id: number
} & IUser;
