import { MenuVerticalComponent } from "./menuVertical/menuVertical.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const menuVerticalRoutes: Routes = [
  { path: "", component: MenuVerticalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(menuVerticalRoutes)],
  exports: [RouterModule]
})
export class MenuVerticalRouting {}
