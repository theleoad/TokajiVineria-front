import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { ProdutoRouting } from "./produto.routing";
import { ProdutoService } from "./produto.service";
import { ProdutoListaComponent } from "./produto-lista/produto-lista.component";
import { ProdutoFormularioComponent } from "./produto-formulario/produto-formulario.component";
import { CategoriaService } from "src/app/dominio/categoria/categoria.service";
import { NacionalidadeService } from "src/app/dominio/nacionalidade/nacionalidade.service";
import { HarmonizacaoService } from "./../harmonizacao/harmonizacao.service";

import { CarrinhoService } from "../carrinho/carrinho.service";

@NgModule({
  declarations: [
    ProdutoListaComponent,
    ProdutoFormularioComponent
  ],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Componente
    ProdutoRouting
  ],
  providers: [
    // Serviços
    HarmonizacaoService,
    NacionalidadeService,
    CategoriaService,
    ProdutoService
  ]
})
export class ProdutoModule {}
