import { CarrinhoListComponent } from "src/app/dominio/carrinho/carrinho-list/carrinho-list.component";

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const carrinhoRoutes: Routes = [{ path: "", component: CarrinhoListComponent }];

@NgModule({
  imports: [RouterModule.forChild(carrinhoRoutes)],
  exports: [RouterModule]
})
export class CarrinhoRouting {}
