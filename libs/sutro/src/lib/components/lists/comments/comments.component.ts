import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sutro-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
