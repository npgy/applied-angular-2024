import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { LinkItem } from '../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-center-menu-items',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <ul class="menu menu-horizontal px-1">
      @for(link of linkItems(); track link.text) {

      <li>
        <a [routerLink]="link.path">{{ link.text }}</a>
      </li>
      }
    </ul>
  `,
  styles: ``,
})
export class NavbarCenterMenuItemsComponent {
  linkItems = input.required<LinkItem[]>();
}
