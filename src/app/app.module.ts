import { MenuHorizontalComponent } from "./dominio/menuHorizontal/menuHorizontal/menuHorizontal.component";
import { TopoComponent } from "./dominio/topo/topo/topo.component";
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
import { FavoritoService } from "src/app/dominio/favorito/favorito.service";

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoWidget,
    CarrinhoMiniComponent,
    TopoComponent,
    MenuHorizontalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AlertModule.forRoot(),

    // app
    AppRouting
  ],
  providers: [CarrinhoService, ProdutoService, FavoritoService],
  bootstrap: [AppComponent]
})
export class AppModule {}

//, CarrinhoListComponent
