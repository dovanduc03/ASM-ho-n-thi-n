import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const canActivateGuard: CanActivateFn = (route, state) => {
  //kiểm tra nếu người dùng đã đăng nhập thì sẽ đc truy cập
  //chưa đăng nhập thì bị đẩy về trang admin
  const authService = inject(AuthService);
  const router = new Router();
  if (authService.checkAuth()) {
    return true; //kiểm tra điều kiện, đúng thì return true -> cho phép truy cập
  }
  router.navigate(['login']);
  return false; //return false -> không cho truy cập
};
