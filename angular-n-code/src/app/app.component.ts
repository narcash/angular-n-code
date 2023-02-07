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


  news: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, debitis!',
    'Lorem ipsum?',
    'Lorem ipsum dolor sit amet!',
    'Lorem',
  ];

  addGood(good: string) {
    this.shopCart.push(good)
  }
}

