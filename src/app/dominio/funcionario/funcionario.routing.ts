import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FuncionarioListaComponent } from "./funcionario-lista/funcionario-lista.component";
import { FuncionarioFormularioComponent } from "./funcionario-formulario/funcionario-formulario.component";

const funcionarioRoutes: Routes = [
  { path: "", component: FuncionarioListaComponent },
  { path: "visualizar/:id", component: FuncionarioFormularioComponent },
  { path: "novo", component: FuncionarioFormularioComponent },
  { path: "alterar/:id", component: FuncionarioFormularioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(funcionarioRoutes)],
  exports: [RouterModule]
})
export class FuncionarioRouting {}
