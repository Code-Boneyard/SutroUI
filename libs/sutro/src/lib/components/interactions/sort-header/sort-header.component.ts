import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sutro-sort-header',
  templateUrl: './sort-header.component.html',
  styleUrls: ['./sort-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
