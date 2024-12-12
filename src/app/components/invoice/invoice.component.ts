import {Component, OnInit} from '@angular/core';
import {InvoiceService} from '../../services/invoice.service';
import {Invoice} from '../../models/invoice';
import {InvoiceViewComponent} from '../invoice-view/invoice-view.component';
import {ClientViewComponent} from '../client-view/client-view.component';
import {CompanyViewComponent} from '../company-view/company-view.component';
import {ListItemsComponent} from '../list-items/list-items.component';
import {RowItemComponent} from '../row-item/row-item.component';
import {TotalComponent} from '../total/total.component';

@Component({
  selector: 'app-invoice',
  imports: [InvoiceViewComponent, ClientViewComponent,
    CompanyViewComponent, ListItemsComponent, TotalComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit { // implementamos OnInit

  // creamos variable de tipo factura
  invoice!: Invoice;

  // Definimos constructor para inyectar el service con los datos
  // el atributo que se pasa es para realizar inyección de dependencias es lo mismo que hacerlo afuera
  // solo que ahora es un atributo de la clase
  constructor(private service: InvoiceService) {}

  ngOnInit(): void {
    // pasamos el service a la variable para utilizarlo en la plantilla html
    this.invoice = this.service.getInvoice();
  }

  // creamos metodo removeItem y pasamos por parametro el id
  removeItem(id: number) {
    // cambiamos al service la eliminacion con la actualizacion del total
    this.invoice = this.service.remove(id);
  }

}
