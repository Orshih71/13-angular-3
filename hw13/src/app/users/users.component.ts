import {Component, OnInit} from '@angular/core';
import {MyServiceService} from "../my-service.service";

@Component({
  selector: 'app-users',
  template: `
    <ul>
      <li *ngFor="let user of users">
        <a [routerLink]="[user?.login?.uuid]">
          {{user?.name?.first}}
        </a>
      </li>
    </ul>
    <router-outlet></router-outlet>
    `,
  styles: ['']
})
export class UsersComponent implements OnInit {
  private users;

  constructor(private myServiceService: MyServiceService) {

  }

  ngOnInit() {
    this.users = this.myServiceService.getCachedData()
  }

}
