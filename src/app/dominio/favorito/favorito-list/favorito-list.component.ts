import { ItemFavorito } from "./../../itemFavorito/itemFavorito";
import { FavoritoService } from "src/app/dominio/favorito/favorito.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "favorito",
  templateUrl: "./favorito-list.component.html",
  styleUrls: ["./favorito-list.component.css"]
})
export class FavoritoListComponent implements OnInit {
  itensFavorito: ItemFavorito[];

  constructor(private favoritoService: FavoritoService) {}

  ngOnInit() {
    this.itensFavorito = this.favoritoService.consultarFavorito();
  }

  aumentarQuantidadeItemFavorito(index: number) {
    this.itensFavorito[index].quantidade++;
    localStorage.setItem("favorito", JSON.stringify(this.itensFavorito));
  }

  diminuirQuantidadeItemFavorito(index: number) {
    if (this.itensFavorito[index].quantidade === 1) {
      this.itensFavorito.splice(index, 1);
    } else {
      this.itensFavorito[index].quantidade--;
    }
    localStorage.setItem("favorito", JSON.stringify(this.itensFavorito));
  }

  excluirItemFavorito(index: number) {
    this.itensFavorito.splice(index, 1);
    localStorage.setItem("favorito", JSON.stringify(this.itensFavorito));
  }

  valorTotalFavorito() {
    let total = 0;
    this.itensFavorito.forEach(itemFavorito => {
      total += itemFavorito.quantidade * itemFavorito.produto.preco;
    });

    return total;
  }
}
