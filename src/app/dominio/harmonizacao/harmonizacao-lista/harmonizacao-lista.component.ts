import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Harmonizacao } from "../harmonizacao";
import { HarmonizacaoService } from "../../harmonizacao/harmonizacao.service";

@Component({
  selector: "harmonizacao-lista",
  templateUrl: "./harmonizacao-lista.component.html",
  styleUrls: ["./harmonizacao-lista.component.css"]
})
export class HarmonizacaoListaComponent implements OnInit {
  harmonizacaos: Harmonizacao[];
  teste: string = "valor da variavel";

  constructor(
    private harmonizacaoService: HarmonizacaoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.harmonizacaoService.buscarTodos().subscribe(resposta => {
      this.harmonizacaos = resposta;
    });
  }

  excluir(harmonizacaoId: number, index: number) {
    this.harmonizacaoService.excluir(harmonizacaoId).subscribe(resposta => {
      this.harmonizacaos.splice(index, 1);

      console.log("harmonizacao excluído com sucesso");

      // retorna para a lista
      this.router.navigate(["/harmonizacao"]);
    });
  }
}
