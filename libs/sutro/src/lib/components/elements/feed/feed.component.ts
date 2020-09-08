import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sutro-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
