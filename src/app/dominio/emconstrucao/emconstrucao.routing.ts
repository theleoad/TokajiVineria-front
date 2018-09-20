import { EmconstrucaoComponent } from "./emconstrucao/emconstrucao.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const emconstrucaoRoutes: Routes = [
  { path: "", component: EmconstrucaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(emconstrucaoRoutes)],
  exports: [RouterModule]
})
export class EmconstrucaoRouting {}
