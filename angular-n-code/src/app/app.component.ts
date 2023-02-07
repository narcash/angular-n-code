import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop';
  shopCart: string[] = [];
  goods: string[] = ['milk', 'apple', 'cheese', 'bread'];

  addGood(good: string) {
    this.shopCart.push(good)
  }
}

