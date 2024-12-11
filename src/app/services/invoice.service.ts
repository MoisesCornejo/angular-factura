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
    return this.invoice;
  }
}
