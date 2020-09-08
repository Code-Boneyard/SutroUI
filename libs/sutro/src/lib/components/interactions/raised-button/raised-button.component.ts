import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sutro-ui-raised-button',
  templateUrl: './raised-button.component.html',
  styleUrls: ['./raised-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaisedButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
