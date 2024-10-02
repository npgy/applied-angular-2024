import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { HouseRatingEntry, RatingRange } from './types';
import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';

const initialState: HouseRatingEntry = {
  address: '',
  qualityRating: 0,
  quantityRating: 0,
  hasAmbiance: false,
  hasFullSizeCandy: false,
};
export const HouseRatingStore = signalStore(
  withDevtools('house-rating-entry'),
  withState(initialState),
  withMethods((store) => {
    return {
      set(key: keyof HouseRatingEntry, value: unknown) {
        updateState(store, `changed ${key}`, {
          [key]: value,
        });
      },
      toggle(
        key: keyof Pick<HouseRatingEntry, 'hasAmbiance' | 'hasFullSizeCandy'>
      ) {
        updateState(store, `toggled ${key}`, { [key]: !store[key]() });
      },
      add() {
        updateState(store, 'added house', initialState);
      },
    };
  }),
  withComputed((store) => {
    return {
      totalScore: computed(() => {
        return (
          store.qualityRating() +
          1 +
          store.quantityRating() +
          1 +
          (store.hasAmbiance() ? 1 : 0) +
          (store.hasFullSizeCandy() ? 1 : 0)
        );
      }),
    };
  })
);
