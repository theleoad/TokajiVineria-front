import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Funcionario } from "../funcionario";
import { FuncionarioService } from "../../funcionario/funcionario.service";

@Component({
  selector: "funcionario-lista",
  templateUrl: "./funcionario-lista.component.html",
  styleUrls: ["./funcionario-lista.component.css"]
})
export class FuncionarioListaComponent implements OnInit {
  funcionarios: Funcionario[];
  teste: string = "valor da variavel";

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.funcionarioService.buscarTodos().subscribe(resposta => {
      this.funcionarios = resposta;
    });
  }

  excluir(funcionarioId: number, index: number) {
    this.funcionarioService.excluir(funcionarioId).subscribe(resposta => {
      this.funcionarios.splice(index, 1);

      console.log("funcionario excluído com sucesso");

      // retorna para a lista
      this.router.navigate(["/funcionario"]);
    });
  }
}
