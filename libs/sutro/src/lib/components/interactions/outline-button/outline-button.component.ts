import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sutro-outline-button',
  templateUrl: './outline-button.component.html',
  styleUrls: ['./outline-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutlineButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
