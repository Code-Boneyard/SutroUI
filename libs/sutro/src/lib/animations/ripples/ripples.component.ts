import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sutro-ripples',
  templateUrl: './ripples.component.html',
  styleUrls: ['./ripples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RipplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
