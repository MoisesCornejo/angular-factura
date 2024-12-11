import {Component, Input} from '@angular/core';
import {Client} from '../../models/client';

@Component({
  selector: 'app-client-view',
  imports: [],
  templateUrl: './client-view.component.html',
  styleUrl: './client-view.component.css'
})
export class ClientViewComponent {

  // creamos variable para almacenar datos que vienen desde el padre invoice
  @Input() client!: Client;

}
