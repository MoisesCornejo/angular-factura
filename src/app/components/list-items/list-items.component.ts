import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from '../../models/item';
import {RowItemComponent} from '../row-item/row-item.component';

@Component({
  selector: 'app-list-items',
  imports: [RowItemComponent],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {

  @Input() items: Item[] = [];

  // hacemos lo mismo para emitirlo al padre de list-items que es invoice-component
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();
  onRemove(id: number) {
    this.removeEventEmitter.emit(id);
  }

}
