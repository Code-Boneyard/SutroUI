import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sutro-page-layout',
  template: `<page-layout>
    <div class="wrapper">
      <div>
        <p>Here's a test of the page layout!</p>
      </div>
    </div>`,
  styleUrls: ['./page-layout.scss'],
})
export default class PageLayoutComponent {
}
