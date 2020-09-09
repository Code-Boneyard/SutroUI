import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sutro-gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GanttChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
