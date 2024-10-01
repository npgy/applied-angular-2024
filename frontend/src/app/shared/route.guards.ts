import { inject } from '@angular/core';

import { UserStore } from './user.store';

export function userLoggedInGuard() {
  return () => {
    return inject(UserStore).userLoggedIn();
  };
}
