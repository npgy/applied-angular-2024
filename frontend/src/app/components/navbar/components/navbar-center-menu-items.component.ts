import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { LinkItem } from '../types';

@Component({
  selector: 'app-navbar-center-menu-items',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <ul class="menu menu-horizontal px-1">
      @for(link of linkItems(); track link.text) {

      <li><a [href]="link.path"></a>{{ link.text }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class NavbarCenterMenuItemsComponent {
  linkItems = input.required<LinkItem[]>();
}
