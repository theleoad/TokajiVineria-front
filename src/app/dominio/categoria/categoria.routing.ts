import { CategoriaComponent } from "./categoria/categoria.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const categoriaRoutes: Routes = [{ path: "", component: CategoriaComponent }];

@NgModule({
  imports: [RouterModule.forChild(categoriaRoutes)],
  exports: [RouterModule]
})
export class CategoriaRouting {}
