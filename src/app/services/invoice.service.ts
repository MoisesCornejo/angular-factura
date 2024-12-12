import { Injectable } from '@angular/core';
import {Invoice} from '../models/invoice';
import {invoiceData} from  '../data/invoice.data'

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
