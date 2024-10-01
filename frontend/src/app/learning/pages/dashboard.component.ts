import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GolfStore } from '@shared/golf.store';
import { UserStore } from '@shared/user.store';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  template: `
    @if (userStore.userLoggedIn()) {
    <p>Dashboard stuff goes here for real</p>
    <span>By the way your golf score is {{ golfStore.totalScore() }}</span> }
    @else {
    <div class="flex w-52 flex-col gap-4">
      <div class="skeleton h-8 w-full"></div>
      <div class="skeleton h-4 w-28"></div>
      <div class="skeleton h-4 w-full"></div>
      <div class="skeleton h-4 w-full"></div>
    </div>
    }
  `,
  styles: ``,
})
export class DashboardComponent {
  golfStore = inject(GolfStore);
  userStore = inject(UserStore);
}
