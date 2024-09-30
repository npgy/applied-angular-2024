import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { LinkItem } from '../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-side-menu-items',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <ul
      tabindex="0"
      class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
    >
      @for(link of linkItems(); track $index) {

      <li>
        <a [routerLink]="link.path">{{ link.text }}</a>
      </li>
      }
    </ul>
  `,
  styles: ``,
})
export class NavbarSideMenuItemsComponent {
  linkItems = input.required<LinkItem[]>();
}
