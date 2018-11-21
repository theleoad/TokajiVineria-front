import { FavoritoListComponent } from "src/app/dominio/favorito/favorito-list/favorito-list.component";

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const favoritoRoutes: Routes = [{ path: "", component: FavoritoListComponent }];

@NgModule({
  imports: [RouterModule.forChild(favoritoRoutes)],
  exports: [RouterModule]
})
export class FavoritoRouting {}
