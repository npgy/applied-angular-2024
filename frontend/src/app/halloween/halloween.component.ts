import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <p>This is the halloween feature</p> `,
  styles: ``,
})
export class HalloweenComponent {}
