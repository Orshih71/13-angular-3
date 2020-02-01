import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {MyServiceService} from "../my-service.service";

@Injectable({
  providedIn: 'root'
})
export class CheckerGuard implements CanActivate {
  constructor(private myServiceService: MyServiceService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let found = false;
    let uid = next.paramMap.get('uid');
    this.myServiceService.getCachedData().forEach(user => {
      let tmp = user['login']['uuid'];
      if (tmp == uid) {
        found = true;
      }
    });
    if (found) return true;
    else return this.router.navigateByUrl('not-found');
  }

}
