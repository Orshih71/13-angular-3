import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './not-found.component';

const MyRoutes: Routes = [
  {path: "users", loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  {path: "not-found", component:NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(MyRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
