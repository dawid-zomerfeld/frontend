import {NgModule} from '@angular/core';

import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  exports: [LoginComponent, RegisterComponent],
  providers: [],
  imports: [
    CommonModule,
    RouterModule]
})
export class AuthModule {
}
