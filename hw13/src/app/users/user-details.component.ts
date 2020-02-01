import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MyServiceService} from "../my-service.service";

@Component({
  selector: 'app-user-details',
  template: `<ul>
    <li *ngFor='let property of user | keyvalue'>
      <span>
        {{property.key}}:{{property.value}}
      </span>
    </li>
  </ul>`,
  styles: ['']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  private subs$;
  private user;

  constructor(private route: ActivatedRoute, private myServiceService: MyServiceService) {
  }

  ngOnInit() {
    this.subs$ = this.route.params.subscribe(params => {
      this.myServiceService.getCachedData().forEach(user => {
        let tmp = user['login']['uuid'];
        if(tmp == params['uid']) {
          this.user = user;
        }
      })
    });
  }

  ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }

}
