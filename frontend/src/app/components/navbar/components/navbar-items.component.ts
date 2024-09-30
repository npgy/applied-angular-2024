import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar-items',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <li><a>Learning 1</a></li>
    <li><a>Learning 2</a></li>
  `,
  styles: ``,
})
export class NavbarItemsComponent {}
