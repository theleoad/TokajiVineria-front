import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Nacionalidade } from "../nacionalidade";
import { NacionalidadeService } from "../nacionalidade.service";

@Component({
  selector: "nacionalidade-lista",
  templateUrl: "./nacionalidade-formulario.component.html",
  styleUrls: ["./nacionalidade-formulario.component.css"]
})
export class NacionalidadeFormularioComponent implements OnInit {
  nacionalidade: Nacionalidade;
  nacionalidadeForm: FormGroup;
  titulo: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private nacionalidadeService: NacionalidadeService
  ) {}

  ngOnInit() {
    this.nacionalidade = new Nacionalidade();

    /* Obter o `ID` passado por parâmetro na URL */
    this.nacionalidade.id = this.route.snapshot.params["id"];

    /* Altera o título da página */
    this.titulo =
      this.nacionalidade.id == null
        ? "Nova Nacionalidade"
        : "Alterar Nacionalidade";

    /* Reactive Forms */
    this.nacionalidadeForm = this.builder.group(
      {
        id: [],
        nome: this.builder.control("", [
          Validators.required,
          Validators.maxLength(50)
        ])
      },
      {}
    );

    // Se existir `ID` realiza busca para trazer os dados
    if (this.nacionalidade.id != null) {
      this.nacionalidadeService
        .buscarPeloId(this.nacionalidade.id)
        .subscribe(retorno => {
          // Atualiza o formulário com os valores retornados
          this.nacionalidadeForm.patchValue(retorno);
        });
    }
  }

  salvar(nacionalidade: Nacionalidade) {
    if (this.nacionalidadeForm.invalid) {
      console.log("Erro no formulário");
    } else {
      this.nacionalidadeService.salvar(nacionalidade).subscribe(
        response => {
          console.log("Curso salvo com sucesso");

          // retorna para a lista
          this.router.navigate(["/nacionalidade"]);
        },
        error => {
          console.log("Erro no back-end");
        }
      );
    }
  }
}
