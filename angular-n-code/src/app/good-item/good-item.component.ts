import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-good-item',
  templateUrl: './good-item.component.html',
  styleUrls: ['./good-item.component.scss']
})
export class GoodItemComponent {
  @Input() goodItem: string = '';

  // addGood(good: string) {
  //   this.shopCart.push(good)
  // }
}
