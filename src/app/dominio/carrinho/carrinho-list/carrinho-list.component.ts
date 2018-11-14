import { ItemCarrinho } from "./../../itemCarrinho/itemCarrinho";
import { CarrinhoService } from "src/app/dominio/carrinho/carrinho.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-carrinho-list",
  templateUrl: "./carrinho-list.component.html",
  styleUrls: ["./carrinho-list.component.css"]
})
export class CarrinhoListComponent implements OnInit {
  itensCarrinho: ItemCarrinho[];

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.consultarCarrinho();
  }

  aumentarQuantidadeItemCarrinho(index: number) {
    this.itensCarrinho[index].quantidade++;
    localStorage.setItem("carrinho", JSON.stringify(this.itensCarrinho));
  }

  diminuirQuantidadeItemCarrinho(index: number) {
    if (this.itensCarrinho[index].quantidade === 1) {
      this.itensCarrinho.splice(index, 1);
    } else {
      this.itensCarrinho[index].quantidade--;
    }
    localStorage.setItem("carrinho", JSON.stringify(this.itensCarrinho));
  }

  excluirItemCarrinho(index: number) {
    this.itensCarrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(this.itensCarrinho));
  }

  valorTotalCarrinho() {
    let total = 0;
    this.itensCarrinho.forEach(itemCarrinho => {
      total += itemCarrinho.quantidade * itemCarrinho.produto.preco;
    });

    return total;
  }
}
