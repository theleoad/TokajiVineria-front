import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FornecedorListaComponent } from "./fornecedor-lista/fornecedor-lista.component";
import { FornecedorFormularioComponent } from "./fornecedor-formulario/fornecedor-formulario.component";

const fornecedorRoutes: Routes = [
  { path: "", component: FornecedorListaComponent },
  { path: "visualizar/:id", component: FornecedorFormularioComponent },
  { path: "novo", component: FornecedorFormularioComponent },
  { path: "alterar/:id", component: FornecedorFormularioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(fornecedorRoutes)],
  exports: [RouterModule]
})
export class FornecedorRouting {}
