import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Nacionalidade } from "../nacionalidade";
import { NacionalidadeService } from "../../nacionalidade/nacionalidade.service";

@Component({
  selector: "nacionalidade-lista",
  templateUrl: "./nacionalidade-lista.component.html",
  styleUrls: ["./nacionalidade-lista.component.css"]
})
export class NacionalidadeListaComponent implements OnInit {
  nacionalidades: Nacionalidade[];
  teste: string = "valor da variavel";

  constructor(
    private nacionalidadeService: NacionalidadeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.nacionalidadeService.buscarTodos().subscribe(resposta => {
      this.nacionalidades = resposta;
    });
  }

  excluir(nacionalidadeId: number, index: number) {
    this.nacionalidadeService.excluir(nacionalidadeId).subscribe(resposta => {
      this.nacionalidades.splice(index, 1);

      console.log("nacionalidade excluído com sucesso");

      // retorna para a lista
      this.router.navigate(["/nacionalidade"]);
    });
  }
}
