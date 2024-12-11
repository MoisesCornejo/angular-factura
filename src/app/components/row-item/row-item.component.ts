import {Component, Input} from '@angular/core';
import {Item} from '../../models/item';

@Component({
  selector: 'tr[app-row-item]',
  imports: [],
  templateUrl: './row-item.component.html',
  styleUrl: './row-item.component.css'
})
export class RowItemComponent {

  @Input() item!: Item;

}
