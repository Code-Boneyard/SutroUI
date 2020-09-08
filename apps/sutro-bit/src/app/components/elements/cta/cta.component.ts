import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sutro-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
