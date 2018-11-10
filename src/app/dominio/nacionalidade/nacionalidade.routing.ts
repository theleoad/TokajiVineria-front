import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NacionalidadeListaComponent } from "./nacionalidade-lista/nacionalidade-lista.component";
import { NacionalidadeFormularioComponent } from "./nacionalidade-formulario/nacionalidade-formulario.component";

const nacionalidadeRoutes: Routes = [
  { path: "", component: NacionalidadeListaComponent },
  { path: "visualizar/:id", component: NacionalidadeFormularioComponent },
  { path: "novo", component: NacionalidadeFormularioComponent },
  { path: "alterar/:id", component: NacionalidadeFormularioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(nacionalidadeRoutes)],
  exports: [RouterModule]
})
export class NacionalidadeRouting {}
