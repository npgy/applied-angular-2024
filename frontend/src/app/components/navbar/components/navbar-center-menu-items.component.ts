import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { LinkItem } from '../types';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-center-menu-items',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <ul class="menu menu-horizontal px-1">
      @for(link of linkItems(); track link.text) {

      <li>
        <a
          [routerLink]="link.path"
          [routerLinkActive]="['border-b-2', 'border-white']"
          >{{ link.text }}</a
        >
      </li>
      }
    </ul>
  `,
  styles: ``,
})
export class NavbarCenterMenuItemsComponent {
  linkItems = input.required<LinkItem[]>();
}
