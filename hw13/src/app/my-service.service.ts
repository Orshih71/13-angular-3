import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  getOnlineData(): Observable<any> {
    return this.http.get("https://randomuser.me/api/?results=10");
  }

  getCachedData() {
    return JSON.parse(localStorage.getItem('users'));
  }

  constructor(private http: HttpClient) {
  }
}
