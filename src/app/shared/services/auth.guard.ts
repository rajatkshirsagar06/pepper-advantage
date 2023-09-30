import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private utilityServ: UtilsService) {}
  /**
   * @Description : Check and Authenticate User and Navigate User back to login page
   * @param route :ActivatedRouteSnapshot
   * @param state :RouterStateSnapshot
   * @returns Boolean
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('name')) {
      return true;
    } else {
      this.router.navigateByUrl('login');
      this.utilityServ.openSnackBar('Please login !!!', 'close');
      return false;
    }
  }
}
