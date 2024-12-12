import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from '../../models/item';

@Component({
  selector: 'tr[app-row-item]',
  imports: [],
  templateUrl: './row-item.component.html',
  styleUrl: './row-item.component.css'
})
export class RowItemComponent {

  @Input() item!: Item;

  // Creamos Output para trasmitir objetos de hijos a padre de tipo numero que es el id
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();
  // creamos metodo onRemove del evento click en el html y emitimos el id del hijo al  padre
  onRemove(id: number) {
    this.removeEventEmitter.emit(id);
  }

}
