import { computed, signal } from '@angular/core';

export type GolfHole = {
  holeNumber: number;
  score: number;
};

export class GolfService {
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
