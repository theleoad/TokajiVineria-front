import { ProdutoService } from "src/app/dominio/produto/produto.service";
import { CarrinhoWidget } from "./dominio/carrinho/carrinho-widget/carrinho-widget.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { AlertModule } from "ngx-bootstrap";
import { AppRouting } from "./app.routing";
import { CarrinhoService } from "src/app/dominio/carrinho/carrinho.service";

import { CarrinhoMiniComponent } from "src/app/dominio/carrinho/carrinho-mini/carrinho-mini.component";

@NgModule({
  declarations: [AppComponent, CarrinhoWidget, CarrinhoMiniComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AlertModule.forRoot(),

    // app
    AppRouting
  ],
  providers: [CarrinhoService, ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule {}

//, CarrinhoListComponent
