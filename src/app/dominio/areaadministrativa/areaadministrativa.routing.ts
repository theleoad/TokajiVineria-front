import { AreaadministrativaComponent } from "./areaadministrativa/areaadministrativa.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const areaadministrativaRoutes: Routes = [
  { path: "", component: AreaadministrativaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(areaadministrativaRoutes)],
  exports: [RouterModule]
})
export class AreaadministrativaRouting {}
