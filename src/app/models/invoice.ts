// creamos clase factura
import {Client} from './client';
import {Company} from './company';
import {Item} from './item';

export class Invoice {
  id!: number;
  name!: string;
  client!: Client; // indicamos que es de tipo Cliente!
  company!: Company; // indicamos que es de tipo Compañía
  items!: Item[]; // indicamos que es un array de tipo Item
}
