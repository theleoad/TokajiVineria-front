import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Funcionario } from "../funcionario";
import { FuncionarioService } from "../funcionario.service";

@Component({
  selector: "funcionario-lista",
  templateUrl: "./funcionario-formulario.component.html",
  styleUrls: ["./funcionario-formulario.component.css"]
})
export class FuncionarioFormularioComponent implements OnInit {
  funcionario: Funcionario;
  funcionarioForm: FormGroup;
  titulo: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private funcionarioService: FuncionarioService
  ) {}

  ngOnInit() {
    this.funcionario = new Funcionario();

    /* Obter o `ID` passado por parâmetro na URL */
    this.funcionario.id = this.route.snapshot.params["id"];

    /* Altera o título da página */
    this.titulo =
      this.funcionario.id == null ? "Nova Funcionario" : "Alterar Funcionario";

    /* Reactive Forms */
    this.funcionarioForm = this.builder.group(
      {
        id: [],
        nome: this.builder.control("", [
          Validators.required,
          Validators.maxLength(50)
        ]),
        cpf: this.builder.control("", [
          Validators.required,
          Validators.maxLength(11)
        ]),
        rg: this.builder.control("", [
          Validators.required,
          Validators.maxLength(20)
        ]),
        endereco: this.builder.control("", [
          Validators.required,
          Validators.maxLength(100)
        ]),
        bairro: this.builder.control("", [
          Validators.required,
          Validators.maxLength(30)
        ]),
        cidade: this.builder.control("", [
          Validators.required,
          Validators.maxLength(30)
        ])
      },
      {}
    );

    // Se existir `ID` realiza busca para trazer os dados
    if (this.funcionario.id != null) {
      this.funcionarioService
        .buscarPeloId(this.funcionario.id)
        .subscribe(retorno => {
          // Atualiza o formulário com os valores retornados
          this.funcionarioForm.patchValue(retorno);
        });
    }
  }

  salvar(funcionario: Funcionario) {
    if (this.funcionarioForm.invalid) {
      console.log("Erro no formulário");
    } else {
      this.funcionarioService.salvar(funcionario).subscribe(
        response => {
          console.log("Curso salvo com sucesso");

          // retorna para a lista
          this.router.navigate(["/funcionario"]);
        },
        error => {
          console.log("Erro no back-end");
        }
      );
    }
  }
}
