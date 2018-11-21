import { ItemCarrinho } from "./../itemCarrinho/itemCarrinho";
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

import { Observable, Observer, Subject, BehaviorSubject } from "rxjs";
import { catchError, last, map, tap } from "rxjs/operators";
import { Carrinho } from "./carrinho";
import { Produto } from "../produto/produto";
import { ProdutoService } from "../produto/produto.service";

@Injectable()
export class CarrinhoService {
  carrinho: ItemCarrinho[] = [];

  inserirCarrinho(produto: Produto) {
    // recebe um produto
    this.carrinho = JSON.parse(localStorage.getItem("carrinho")); //pega a string do local storage e transforma em obj
    if (!this.carrinho) {
      this.carrinho = []; //tenho de resetar o objeto pois se o json estiver vazio ele vira null, e eu não posso dar push em algo null
      this.carrinho.push(new ItemCarrinho(produto, 1)); //inicia o obj itemCarrinho com 1 na quantidade e manda para o carrinho
      localStorage.setItem("carrinho", JSON.stringify(this.carrinho)); //sobe o objeto para o local storage transformando ele em string no formato JSON
    } else {
      //find ele volta uma referencia para algo que vc está pesquisando
      let itemEncontrado = this.carrinho.find(
        itemCarrinho => itemCarrinho.produto.id == produto.id //busca o item do carrinho pelo id do que está tentando inserir se achar retorna uma referencia(funciona como um ponteiro em C/C++)
      );
      if (itemEncontrado) {
        // verifica se existe algum itemEncontrado
        itemEncontrado.quantidade += 1; //se sim adiciona um
      } else {
        this.carrinho.push(new ItemCarrinho(produto, 1)); //se nao sobe um novo item para o carrinho
      }
      localStorage.setItem("carrinho", JSON.stringify(this.carrinho)); //independente do resultado tem de subir para o carrinho
    }
  }

  qtdTotalCarrinho() {
    let total = 0;
    let quantidade = JSON.parse(localStorage.getItem("carrinho"));
    quantidade.forEach(element => {
      total++;
    });
    return total;
  }
  consultarCarrinho() {
    return JSON.parse(localStorage.getItem("carrinho"));
  }
}

// export class CarrinhoService {
//   private qtd: number = 0;

//   private produtos: Produto[] = [];
//   private carrinhoSubject = new Subject<Carrinho>();

//   carrinhoObservable = this.carrinhoSubject.asObservable();

//   public constructor() {}

//   adicionarProduto(produto: Produto) {
//     console.log("adicionarProduto");
//     this.produtos.push(produto);
//     this.carrinhoSubject.next(<Carrinho>{
//       qtdProduto: this.produtos.length,
//       produtos: this.produtos
//     });
//   }

//   excluirProduto(id: number) {}
// }
