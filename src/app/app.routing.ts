import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: 'produto', loadChildren: './dominio/produto/produto.module#ProdutoModule'}
];



@NgModule({
    imports: [RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
    )],
    exports: [RouterModule]
  })

  export class AppRouting {}