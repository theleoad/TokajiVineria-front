import { FuncionarioComponent } from "./funcionario/funcionario.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const funcionarioRoutes: Routes = [
  { path: "", component: FuncionarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(funcionarioRoutes)],
  exports: [RouterModule]
})
export class FuncionarioRouting {}
