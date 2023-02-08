import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-good-item',
  templateUrl: './good-item.component.html',
  styleUrls: ['./good-item.component.scss']
})
export class GoodItemComponent {
  @Input() goodItem: string = '';
  @Output() onAddGood = new EventEmitter();

  addGood(good: string) {
    this.onAddGood.emit(good)
  }
}
