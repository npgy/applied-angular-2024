import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { IncrementButtonDirective } from '@shared/increment-button.directive';
import { DecrementButtonDirective } from '@shared/decrement-button.directive';
import { GolfStore } from '@shared/golf.store';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IncrementButtonDirective, DecrementButtonDirective],
  providers: [],
  template: `
    <div>
      <div>
        <button appIncrementButton (click)="service.increment()">+</button>
        <span>{{ service.currentScore() }}</span>
        <button appDecrementButton (click)="service.decrement()">-</button>
        <button class="btn btn-primary" (click)="service.sunk()">Sunk</button>
      </div>
      <ul>
        @for(hole of service.holes(); track hole.holeNumber){
        <li>Hole {{ hole.holeNumber }}: {{ hole.score }}</li>
        } @empty {
        <p>
          You're on the first hole. Sink one and you'll see your history here.
        </p>
        }
      </ul>
      <p>Youre total score is {{ service.totalScore() }}</p>
    </div>
  `,
  styles: ``,
})
export class GolfComponent {
  service = inject(GolfStore);
}
