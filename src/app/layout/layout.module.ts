import {NgModule} from '@angular/core';

import {LayoutComponent} from "./layout.component";
import {MenuComponent} from "./menu/menu.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [LayoutComponent, ToolbarComponent, MenuComponent],
  exports: [LayoutComponent, ToolbarComponent, MenuComponent],
  imports: [RouterModule]
})
export class LayoutModule {
}
