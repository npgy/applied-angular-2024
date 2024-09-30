import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-learning',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `<p>learning</p>
    <ul>
      <li><a class="link" routerLink="golf">Golf thing</a></li>
    </ul>
    <section><router-outlet /></section> `,
  styles: ``,
})
export class LearningComponent {}
