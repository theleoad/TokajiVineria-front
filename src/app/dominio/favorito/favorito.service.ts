import { ItemFavorito } from "./../itemFavorito/itemFavorito";
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

import { Observable, Observer, Subject, BehaviorSubject } from "rxjs";
import { catchError, last, map, tap } from "rxjs/operators";
import { Favorito } from "./favorito";
import { Produto } from "../produto/produto";
import { ProdutoService } from "../produto/produto.service";

@Injectable()
export class FavoritoService {
  favorito: ItemFavorito[] = [];

  inserirFavorito(produto: Produto) {
    // recebe um produto
    this.favorito = JSON.parse(localStorage.getItem("favorito")); //pega a string do local storage e transforma em obj
    if (!this.favorito) {
      this.favorito = []; //tenho de resetar o objeto pois se o json estiver vazio ele vira null, e eu não posso dar push em algo null
      this.favorito.push(new ItemFavorito(produto, 1)); //inicia o obj itemFavorito com 1 na quantidade e manda para o favorito
      localStorage.setItem("favorito", JSON.stringify(this.favorito)); //sobe o objeto para o local storage transformando ele em string no formato JSON
    } else {
      //find ele volta uma referencia para algo que vc está pesquisando
      let itemEncontrado = this.favorito.find(
        itemFavorito => itemFavorito.produto.id == produto.id //busca o item do favorito pelo id do que está tentando inserir se achar retorna uma referencia(funciona como um ponteiro em C/C++)
      );
      if (itemEncontrado) {
        // verifica se existe algum itemEncontrado
        itemEncontrado.quantidade += 1; //se sim adiciona um
      } else {
        this.favorito.push(new ItemFavorito(produto, 1)); //se nao sobe um novo item para o favorito
      }
      localStorage.setItem("favorito", JSON.stringify(this.favorito)); //independente do resultado tem de subir para o favorito
    }
  }

  qtdTotalFavorito() {
    let total = 0;
    let quantidade = JSON.parse(localStorage.getItem("favorito"));
    quantidade.forEach(element => {
      total += element.quantidade;
    });
    return total;
  }
  consultarFavorito() {
    return JSON.parse(localStorage.getItem("favorito"));
  }
}

// export class FavoritoService {
//   private qtd: number = 0;

//   private produtos: Produto[] = [];
//   private favoritoSubject = new Subject<Favorito>();

//   favoritoObservable = this.favoritoSubject.asObservable();

//   public constructor() {}

//   adicionarProduto(produto: Produto) {
//     console.log("adicionarProduto");
//     this.produtos.push(produto);
//     this.favoritoSubject.next(<Favorito>{
//       qtdProduto: this.produtos.length,
//       produtos: this.produtos
//     });
//   }

//   excluirProduto(id: number) {}
// }
