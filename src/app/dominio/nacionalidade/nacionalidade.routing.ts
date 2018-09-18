import { NgModule } from "@angular/core";
import { NacionalidadeComponent } from "./nacionalidade/nacionalidade.component";
import { Routes, RouterModule } from "@angular/router";

const nacionalidadeRoutes: Routes = [
  { path: "", component: NacionalidadeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(nacionalidadeRoutes)],
  exports: [RouterModule]
})
export class NacionalidadeRouting {}
