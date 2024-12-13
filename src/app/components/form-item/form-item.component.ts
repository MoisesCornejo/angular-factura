import {Component, EventEmitter, Output} from '@angular/core';
import {Item} from '../../models/item';
import {FormsModule, NgForm} from '@angular/forms';

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
  private counterId = 4;

  // creamos campos que mapearemos desde el form para la vista
  item: any = {
    product: '',
    price: '',
    quantity: ''
  }


  // creamos metodo que reciva los datos del formulario y lo trasmita al padre
  onSubmit(itemForm: NgForm): void {

    // validamos el formulario lo mismo que desactivar el boton
    if (itemForm.valid) {
      // pasamos el id al item
      this.addItemEventEmitter.emit({id: this.counterId, ... this.item});
      this.counterId++;

      // limpiamos datos del formulario
      this.item = {
        product: '',
        price: '',
        quantity: ''
      };

      // resetiamos el formulario para que no aparescan los mensajes de validacion despues de guardar un producto
      itemForm.reset();
      itemForm.resetForm();
    }
  }
}
