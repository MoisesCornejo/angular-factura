import {Component, EventEmitter, Output} from '@angular/core';
import {Item} from '../../models/item';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-item',
  imports: [
    FormsModule
  ],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.css'
})
export class FormItemComponent {

  @Output() addItemEventEmitter: EventEmitter<Item> = new EventEmitter();

  // partimos el id desde el 4 debido a los 3 productos anteriores
  // private counterId = 4;

  // creamos campos que mapearemos desde el form para la vista
  item: any = {
    product: '',
    price: '',
    quantity: ''
  }
}
