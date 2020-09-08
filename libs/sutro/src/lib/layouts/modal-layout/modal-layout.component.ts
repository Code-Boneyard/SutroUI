import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sutro-modal-layout',
  templateUrl: './modal-layout.component.html',
  styleUrls: ['./modal-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
