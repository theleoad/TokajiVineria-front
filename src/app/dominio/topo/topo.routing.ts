import { TopoComponent } from './topo/topo.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';



const topoRoutes: Routes = [
    { path: '', component: TopoComponent},
];


@NgModule({
    imports: [RouterModule.forChild(topoRoutes)],
    exports: [RouterModule]
  })

  export class TopoRouting {}
