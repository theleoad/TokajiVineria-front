import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Fornecedor } from "../fornecedor";
import { FornecedorService } from "../../fornecedor/fornecedor.service";

@Component({
  selector: "fornecedor-lista",
  templateUrl: "./fornecedor-lista.component.html",
  styleUrls: ["./fornecedor-lista.component.css"]
})
export class FornecedorListaComponent implements OnInit {
  fornecedors: Fornecedor[];
  teste: string = "valor da variavel";

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fornecedorService.buscarTodos().subscribe(resposta => {
      this.fornecedors = resposta;
    });
  }

  excluir(fornecedorId: number, index: number) {
    this.fornecedorService.excluir(fornecedorId).subscribe(resposta => {
      this.fornecedors.splice(index, 1);

      console.log("fornecedor excluído com sucesso");

      // retorna para a lista
      this.router.navigate(["/fornecedor"]);
    });
  }
}
