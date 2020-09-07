
import { Component } from '@angular/core';



@Component({
  selector: 'sutro-page',
  template: `
    <div  fxLayout="column" class="wrapper">
      <div fxLayout="column" class="page-layout">
      <h1>This is the Page Title</h1>
      <mat-divider></mat-divider>
        <p>Here's a test of the page layout!</p>
      </div>
    </div>`,
  styleUrls: ['./page-layout.scss'],

})
export default class PageLayoutComponent {
}
