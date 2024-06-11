import { CanDeactivateFn } from '@angular/router';

export const deactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  alert('Bạn ko được rời đi');
  
  return false;
};
