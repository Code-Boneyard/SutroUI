import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sutro-dimmer',
  templateUrl: './dimmer.component.html',
  styleUrls: ['./dimmer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DimmerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
