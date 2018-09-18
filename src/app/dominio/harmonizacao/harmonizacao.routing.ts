import { HarmonizacaoComponent } from "./harmonizacao/harmonizacao.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const harmonizacaoRoutes: Routes = [
  { path: "", component: HarmonizacaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(harmonizacaoRoutes)],
  exports: [RouterModule]
})
export class HarmonizacaoRouting {}
