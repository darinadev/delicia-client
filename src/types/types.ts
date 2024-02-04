export type MenuProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export type MenuType = {
  id: number;
  category: string;
  items: Array<MenuProductType>;
};

export type CartProductType = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  totalProductPrice: number;
};

export type OrderingInfoType = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  message: string;
  shipping: string;
};

export type ImageType = {
  id: number;
  image: string;
};
