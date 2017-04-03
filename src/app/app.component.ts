import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <div>
        <span>Insert a component: </span>
        <select name="component">
            <option value="header">Header</option>
            <option value="row-1">row-1</option>
            <option value="row-2">row-2</option>
            <option value="row-3">row-3</option>
            <option value="footer">footer</option>
        </select>
    </div>
  `
})
export class AppComponent {
  title = 'app works!';
}
