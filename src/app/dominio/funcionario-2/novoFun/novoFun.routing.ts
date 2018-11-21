import { NovoFunComponent } from "./novoFun/novoFun.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const novoFunRoutes: Routes = [{ path: "", component: NovoFunComponent }];

@NgModule({
  imports: [RouterModule.forChild(novoFunRoutes)],
  exports: [RouterModule]
})
export class NovoFunRouting {}
