import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { HouseRatingStore } from './house-rating.store';

@Component({
  selector: 'app-house-rating',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  providers: [HouseRatingStore],
  template: `<p>House Rating Here</p>
    <form [formGroup]="form" (ngSubmit)="add()">
      <div class="form-control">
        <label for="Address" class="label">
          <span>Address</span>
          <input
            type="text"
            class="input input-bordered"
            formControlName="address"
          />
        </label>
      </div>
      <div>
        <p>Quality Rating</p>
        <div class="rating rating-lg">
          @for(item of [0,1,2,3,4]; track item) {
          <input
            type="radio"
            name="quality"
            class="mask mask-star-2 bg-orange-400"
            (change)="store.set('qualityRating', item)"
            [checked]="store.qualityRating() === item"
          />
          }
        </div>
      </div>
      <p>Quantity Rating</p>
      <div class="rating rating-lg">
        @for(item of [0,1,2,3,4]; track item) {
        <input
          type="radio"
          name="quantity"
          class="mask mask-star-2 bg-orange-400"
          (change)="store.set('quantityRating', item)"
          [checked]="store.quantityRating() === item"
        />
        }
      </div>
      <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">Had Good Ambiance</span>
          <input
            type="checkbox"
            [checked]="store.hasAmbiance()"
            (change)="store.toggle('hasAmbiance')"
            class="checkbox checkbox-error"
          />
        </label>
      </div>
      <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">Gave Full Size Candybars</span>
          <input
            type="checkbox"
            [checked]="store.hasFullSizeCandy()"
            (change)="store.toggle('hasFullSizeCandy')"
            class="checkbox checkbox-error"
          />
        </label>
      </div>
      <div>
        <button type="submit" class="btn btn-primary">Add This House</button>
      </div>
    </form>

    <p>The total score for this house is {{ store.totalScore() }}</p> `,
  styles: ``,
})
export class HouseRatingComponent {
  store = inject(HouseRatingStore);

  constructor() {
    this.form.controls.address.valueChanges
      .pipe(
        debounceTime(300),
        filter(() => this.form.controls.address.valid),
        takeUntilDestroyed()
      )
      .subscribe((value) => {
        this.store.set('address', value);
      });
  }

  form = new FormGroup({
    address: new FormControl('', { nonNullable: true }),
  });

  add() {
    if (this.form.valid) {
      this.store.add();
      this.form.reset();
    }
  }
}
