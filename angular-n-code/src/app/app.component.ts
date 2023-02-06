import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-n-code';
  count = 0;
  colorBG = '';
  color = '';

  spanStyles = {
    'font-size': '53px', 'font-famile': 'Verdana'
  }

  increaseCount() {
    this.count++;
  }
  changeBG(color: string) {
    this.colorBG = color + 'BG';
    this.color = color;
  }
}
