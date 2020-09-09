import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sutro-page-layout',
  template: `
  <div class="page-layout" fxLayout="column">
    <h1>Page Title</h1>
    <p>
      Vitae semper quis lectus nulla at volutpat diam. Nulla posuere sollicitudin aliquam ultrices sagittis orci a
      scelerisque purus. Leo integer malesuada nunc vel risus. Nisl nunc mi ipsum faucibus vitae. Vestibulum morbi blandit
      cursus risus at ultrices mi. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Elit scelerisque
      mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. In pellentesque massa placerat duis
      ultricies lacus sed. Tincidunt augue interdum velit euismod. Imperdiet sed euismod nisi porta lorem mollis aliquam.
      Tortor id aliquet lectus proin nibh nisl condimentum. Est ullamcorper eget nulla facilisi etiam dignissim. Laoreet
      non curabitur gravida arcu. Non sodales neque sodales ut etiam sit.
    </p>
  </div>
`,
  styleUrls: ['./page-layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
