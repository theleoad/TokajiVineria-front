import { NovaCatComponent } from "./novaCat/novaCat.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const novaCatRoutes: Routes = [{ path: "", component: NovaCatComponent }];

@NgModule({
  imports: [RouterModule.forChild(novaCatRoutes)],
  exports: [RouterModule]
})
export class NovaCatRouting {}
