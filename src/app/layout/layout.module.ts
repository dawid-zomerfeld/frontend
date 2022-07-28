import {NgModule} from '@angular/core';

import {LayoutComponent} from "./layout.component";
import {MenuComponent} from "./menu/menu.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../shared-module/material/material.module";


@NgModule({
  declarations: [LayoutComponent, ToolbarComponent, MenuComponent],
  exports: [LayoutComponent, ToolbarComponent, MenuComponent],
  imports: [RouterModule, MaterialModule]
})
export class LayoutModule {
}
