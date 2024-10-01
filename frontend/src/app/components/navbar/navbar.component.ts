import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  computed,
} from '@angular/core';
import { NavbarEndComponent } from './components/navbar-end.component';
import { NavbarSideMenuItemsComponent } from './components/navbar-side-menu-items.component';
import { NavbarCenterMenuItemsComponent } from './components/navbar-center-menu-items.component';
import { LinkItem } from './types';
import { RouterLink } from '@angular/router';
import { GolfStore } from '@shared/golf.store';
import { UserStore } from '@shared/user.store';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NavbarEndComponent,
    NavbarSideMenuItemsComponent,
    NavbarCenterMenuItemsComponent,
    RouterLink,
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
          <app-navbar-side-menu-items [linkItems]="navbarItems()" />
        </div>
        <a routerLink="/" class="btn btn-ghost text-xl">Applied Angular</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <app-navbar-center-menu-items [linkItems]="navbarItems()" />
      </div>
      <div class="navbar-end">
        <app-navbar-end />
      </div>
    </div>
  `,
  styles: ``,
})
export class NavbarComponent {
  #navbarItems: LinkItem[] = [
    { path: '/learning', text: 'Learning' },
    { path: '/halloween', text: 'Halloween' },
  ];

  userStore = inject(UserStore);
  navbarItems = computed(() => {
    if (this.userStore.userLoggedIn()) {
      return this.#navbarItems;
    } else {
      return [];
    }
  });
}
