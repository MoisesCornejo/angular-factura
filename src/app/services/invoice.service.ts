import { Injectable } from '@angular/core';
import {Invoice} from '../models/invoice';
import {invoiceData} from  '../data/invoice.data'
import {Item} from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  // importamos datos al service, ademas al indicar que los datos son de tipo invoice
  // nos indicara los errores que existan en la data
  private invoice: Invoice = invoiceData;

  constructor() { }

  getInvoice(): Invoice {
    // creamos variable que guardara el valor del metodo
    const total = this.calculateTotal();

    // esparcimos todos los atributos de la factura con ...
    // creando una nueva instancia de esta agregandole el campo total
    // ademas debemos crear una variable total en el modelo invoice
    return {... this.invoice, total};
  }

  // creamos metodo para eliminar valor del item eliminado
  remove(id: number): Invoice {
    // eliminamos el items mediante la factura que sera igual al mismo items
    // filtrando y eliminando con filter donde por cada elemento pasamos el item
    // y preguntamos si el item.id es distinto al id pasado desde los hijos dejandolo pasar
    // si es igual lo filtra y se elimina!
    // pegamos el filter anteriormente hecho
    this.invoice.items = this.invoice.items.filter(item => item.id != id);

    // recalculamos total despues de hecho el filter
    const total = this.calculateTotal();

    // devolvemos una nueva factura con el item eliminado
    return {... this.invoice, total}; // esparcimos los dato creando una nueva invoice con el total
  }

  // creamos metodo para guardar item
  save(item: Item): Invoice {
    this.invoice.items = [... this.invoice.items, item];
    // calculamos el total
    const total = this.calculateTotal();
    return {... this.invoice, total};
  }

  // Calculamos el total
  calculateTotal() {
    // mejoramos la manera de retornar el total
    return this.invoice.items
      // utilizamos reduce para devolver el total, ira sumando los totales en el acumulador
      .reduce((acumulador, item) =>
        acumulador + (item.price * item.quantity), 0
      );

    /*let total = 0;
    // recorremos cada item para calcular precio x cantidad
    this.invoice.items.forEach(item => {
      // utilizamos metodo de modelo item que multiplica precio * cantidad
      total += item.price * item.quantity;
    });
    return total;*/
  }
}
