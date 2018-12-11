import { MenuHorizontalComponent } from "./menuHorizontal/menuHorizontal.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const menuHorizontalRoutes: Routes = [
  { path: "", component: MenuHorizontalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(menuHorizontalRoutes)],
  exports: [RouterModule]
})
export class MenuHorizontalRouting {}
