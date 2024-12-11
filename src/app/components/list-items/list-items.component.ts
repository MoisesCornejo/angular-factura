import {Component, Input} from '@angular/core';
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

}
