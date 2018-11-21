import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Produto } from "../produto";
import { ProdutoService } from "../produto.service";
import { Categoria } from "../../categoria/categoria";
import { CategoriaService } from "../../categoria/categoria.service";
import { CarrinhoService } from "../../carrinho/carrinho.service";
import { FavoritoService } from "src/app/dominio/favorito/favorito.service";

@Component({
  selector: "produtos-front",
  templateUrl: "./produtos-front.component.html",
  styleUrls: ["./produtos-front.component.css"]
})
export class ProdutosFrontComponent implements OnInit {
  produtos: Produto[];

  constructor(
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService,
    private favoritoService: FavoritoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.produtoService.buscarTodos().subscribe(resposta => {
      this.produtos = resposta;
    });
  }

  adicionarProduto(produto: Produto) {
    this.carrinhoService.inserirCarrinho(produto);
  }

  adicionarProdutoFavorito(produto: Produto) {
    this.favoritoService.inserirFavorito(produto);
  }
}
