import { MeusvinhosComponent } from "./meusvinhos/meusvinhos.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const meusvinhosRoutes: Routes = [{ path: "", component: MeusvinhosComponent }];

@NgModule({
  imports: [RouterModule.forChild(meusvinhosRoutes)],
  exports: [RouterModule]
})
export class MeusvinhosRouting {}
