import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Harmonizacao } from "../harmonizacao";
import { HarmonizacaoService } from "../harmonizacao.service";

@Component({
  selector: "harmonizacao-lista",
  templateUrl: "./harmonizacao-formulario.component.html",
  styleUrls: ["./harmonizacao-formulario.component.css"]
})
export class HarmonizacaoFormularioComponent implements OnInit {
  harmonizacao: Harmonizacao;
  harmonizacaoForm: FormGroup;
  titulo: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private harmonizacaoService: HarmonizacaoService
  ) {}

  ngOnInit() {
    this.harmonizacao = new Harmonizacao();

    /* Obter o `ID` passado por parâmetro na URL */
    this.harmonizacao.id = this.route.snapshot.params["id"];

    /* Altera o título da página */
    this.titulo =
      this.harmonizacao.id == null
        ? "Nova Harmonizacao"
        : "Alterar Harmonizacao";

    /* Reactive Forms */
    this.harmonizacaoForm = this.builder.group(
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
    if (this.harmonizacao.id != null) {
      this.harmonizacaoService
        .buscarPeloId(this.harmonizacao.id)
        .subscribe(retorno => {
          // Atualiza o formulário com os valores retornados
          this.harmonizacaoForm.patchValue(retorno);
        });
    }
  }

  salvar(harmonizacao: Harmonizacao) {
    if (this.harmonizacaoForm.invalid) {
      console.log("Erro no formulário");
    } else {
      this.harmonizacaoService.salvar(harmonizacao).subscribe(
        response => {
          console.log("Curso salvo com sucesso");

          // retorna para a lista
          this.router.navigate(["/harmonizacao"]);
        },
        error => {
          console.log("Erro no back-end");
        }
      );
    }
  }
}
