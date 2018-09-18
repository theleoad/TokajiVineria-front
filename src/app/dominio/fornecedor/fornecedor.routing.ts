import { FornecedorComponent } from "./fornecedor/fornecedor.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const fornecedorRoutes: Routes = [{ path: "", component: FornecedorComponent }];

@NgModule({
  imports: [RouterModule.forChild(fornecedorRoutes)],
  exports: [RouterModule]
})
export class FornecedorRouting {}
