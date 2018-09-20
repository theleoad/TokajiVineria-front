import { NovoForComponent } from "./novoFor/novoFor.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const novoForRoutes: Routes = [{ path: "", component: NovoForComponent }];

@NgModule({
  imports: [RouterModule.forChild(novoForRoutes)],
  exports: [RouterModule]
})
export class NovoForRouting {}
