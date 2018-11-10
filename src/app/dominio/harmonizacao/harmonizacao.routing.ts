import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HarmonizacaoListaComponent } from "./harmonizacao-lista/harmonizacao-lista.component";
import { HarmonizacaoFormularioComponent } from "./harmonizacao-formulario/harmonizacao-formulario.component";

const harmonizacaoRoutes: Routes = [
  { path: "", component: HarmonizacaoListaComponent },
  { path: "visualizar/:id", component: HarmonizacaoFormularioComponent },
  { path: "novo", component: HarmonizacaoFormularioComponent },
  { path: "alterar/:id", component: HarmonizacaoFormularioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(harmonizacaoRoutes)],
  exports: [RouterModule]
})
export class HarmonizacaoRouting {}
