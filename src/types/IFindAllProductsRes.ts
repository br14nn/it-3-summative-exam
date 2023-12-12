interface IResponse {
  id: number;
  prod_name: string;
  prod_currency: string;
  prod_price: number;
  prod_quantity: number;
}

export default interface IFindAllProductsRes {
  response: IResponse[];
  ok: boolean;
}
