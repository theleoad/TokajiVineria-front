import { ProdutoFormularioComponent } from './../produto-formulario/produto-formulario.component';
import { ProdutoListaComponent } from './produto-lista.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';



const produtoRoutes: Routes = [
    { path: '', component: ProdutoListaComponent},
    { path: 'visualizar/:id', component: ProdutoFormularioComponent},
    { path: 'novo', component: ProdutoFormularioComponent},
    { path: 'alterar/:id', component: ProdutoFormularioComponent},
];


@NgModule({
    imports: [RouterModule.forChild(produtoRoutes)],
    exports: [RouterModule]
  })

  export class ProdutoRouting {}