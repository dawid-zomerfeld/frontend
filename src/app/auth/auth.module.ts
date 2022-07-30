import {NgModule} from '@angular/core';

import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../shared-module/material/material.module";


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  exports: [LoginComponent, RegisterComponent],
  providers: [],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule]
})
export class AuthModule {
}
