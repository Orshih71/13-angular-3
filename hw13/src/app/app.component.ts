import {Component, OnDestroy, OnInit} from '@angular/core';
import {MyServiceService} from "./my-service.service";

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="['users']">User</a>
    <router-outlet></router-outlet>
  `,
  styles: ['']
})
export class AppComponent implements OnInit, OnDestroy {
  private subs$;

  constructor(private myServiceService: MyServiceService) {

  }

  ngOnInit(): void {
    this.subs$ = this.myServiceService.getOnlineData()
    .subscribe(data => {
      localStorage.setItem('users', JSON.stringify(data.results));
    });
  }
  ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }
}
