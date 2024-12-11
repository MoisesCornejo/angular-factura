import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-invoice-view',
  imports: [],
  templateUrl: './invoice-view.component.html',
  styleUrl: './invoice-view.component.css'
})
export class InvoiceViewComponent {

  // creamos variables para guardar la informacion que viene desde el padre!
  @Input() id!: number;
  @Input() name!: string;

}
