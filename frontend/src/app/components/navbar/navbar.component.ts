import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavbarEndComponent } from './components/navbar-end.component';
import { NavbarSideMenuItemsComponent } from './components/navbar-side-menu-items.component';
import { NavbarCenterMenuItemsComponent } from './components/navbar-center-menu-items.component';
import { LinkItem } from './types';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NavbarEndComponent,
    NavbarSideMenuItemsComponent,
    NavbarCenterMenuItemsComponent,
  ],
  template: `
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <app-navbar-side-menu-items />
        </div>
        <a class="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <app-navbar-center-menu-items [linkItems]="navbarItems" />
      </div>
      <div class="navbar-end">
        <app-navbar-end />
      </div>
    </div>
  `,
  styles: ``,
})
export class NavbarComponent {
  navbarItems: LinkItem[] = [
    { path: '/learning1', text: 'Learning 1' },
    { path: '/learning2', text: 'Learning 2' },
  ];
}
