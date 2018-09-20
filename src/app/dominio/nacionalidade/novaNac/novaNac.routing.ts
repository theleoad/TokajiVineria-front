import { NovaNacComponent } from "./novaNac/novaNac.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const novaNacRoutes: Routes = [{ path: "", component: NovaNacComponent }];

@NgModule({
  imports: [RouterModule.forChild(novaNacRoutes)],
  exports: [RouterModule]
})
export class NovaNacRouting {}
