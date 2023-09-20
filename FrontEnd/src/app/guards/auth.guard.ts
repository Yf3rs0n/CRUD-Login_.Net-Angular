import { CanActivateFn, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router = new Router();
  const toast = new NgToastService();
  if (token) {
    return true;
  } else {
    toast.error({detail: 'Error',summary: 'Acceso denegado'});
    router.navigate(['login']);
    return false;
  }
};
