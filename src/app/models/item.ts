export class Item {
  id!: number;
  product!: string;
  price!: number;
  quantity!: number;

  // creamos metodo para devolver el total
  total(): number {
    return (this.price * this.quantity);
  }
}
