import { NovaHarComponent } from "./novaHar/novaHar.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const novaHarRoutes: Routes = [{ path: "", component: NovaHarComponent }];

@NgModule({
  imports: [RouterModule.forChild(novaHarRoutes)],
  exports: [RouterModule]
})
export class NovaHarRouting {}
