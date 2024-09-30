import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
type GolfHole = {
  holeNumber: number;
  score: number;
};

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <div>
        <button class="btn btn-primary" (click)="increment()">+</button>
        <span>{{ currentScore() }}</span>
        <button class="btn btn-primary" (click)="decrement()">-</button>
        <button class="btn btn-primary" (click)="sunk()">Sunk</button>
      </div>
      <ul>
        @for(hole of holes(); track hole.holeNumber){
        <li>Hole {{ hole.holeNumber }}: {{ hole.score }}</li>
        } @empty {
        <p>
          You're on the first hole. Sink one and you'll see your history here.
        </p>
        }
      </ul>
      <p>Youre total score is {{ this.totalScore() }}</p>
    </div>
  `,
  styles: ``,
})
export class GolfComponent {
  currentScore = signal(0);
  currentHole = signal(1);
  holes = signal<GolfHole[]>([]);

  totalScore = computed(() =>
    this.holes()
      .map((s) => s.score)
      .reduce((a, b) => a + b)
  );
  increment() {
    this.currentScore.update((n) => n + 1);
  }
  decrement() {
    this.currentScore.update((n) => n - 1);
  }
  sunk() {
    const hole: GolfHole = {
      holeNumber: this.currentHole(),
      score: this.currentScore(),
    };
    this.holes.update((h) => [...h, hole]);
    this.currentScore.set(0);
    this.currentHole.update((h) => h + 1);
  }
}
