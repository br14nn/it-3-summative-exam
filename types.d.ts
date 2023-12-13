interface IProduct {
  id?: number;
  prod_name?: string;
  prod_currency?: string;
  prod_price?: number | "";
  prod_quantity?: number | "";
}

interface IProductApiRes {
  response: IProduct[];
  ok: boolean;
}
