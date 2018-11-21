import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Fornecedor } from "../fornecedor";
import { FornecedorService } from "../fornecedor.service";

@Component({
  selector: "fornecedor-lista",
  templateUrl: "./fornecedor-formulario.component.html",
  styleUrls: ["./fornecedor-formulario.component.css"]
})
export class FornecedorFormularioComponent implements OnInit {
  fornecedor: Fornecedor;
  fornecedorForm: FormGroup;
  titulo: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private fornecedorService: FornecedorService
  ) {}

  ngOnInit() {
    this.fornecedor = new Fornecedor();

    /* Obter o `ID` passado por parâmetro na URL */
    this.fornecedor.id = this.route.snapshot.params["id"];

    /* Altera o título da página */
    this.titulo =
      this.fornecedor.id == null ? "Nova Fornecedor" : "Alterar Fornecedor";

    /* Reactive Forms */
    this.fornecedorForm = this.builder.group(
      {
        id: [],
        nome: this.builder.control("", [
          Validators.required,
          Validators.maxLength(50)
        ]),
        razaosocial: this.builder.control("", [
          Validators.required,
          Validators.maxLength(50)
        ]),
        cnpj: this.builder.control("", [
          Validators.required,
          Validators.maxLength(14)
        ]),
        ie: this.builder.control("", [
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
    if (this.fornecedor.id != null) {
      this.fornecedorService
        .buscarPeloId(this.fornecedor.id)
        .subscribe(retorno => {
          // Atualiza o formulário com os valores retornados
          this.fornecedorForm.patchValue(retorno);
        });
    }
  }

  salvar(fornecedor: Fornecedor) {
    if (this.fornecedorForm.invalid) {
      console.log("Erro no formulário");
    } else {
      this.fornecedorService.salvar(fornecedor).subscribe(
        response => {
          console.log("Curso salvo com sucesso");

          // retorna para a lista
          this.router.navigate(["/fornecedor"]);
        },
        error => {
          console.log("Erro no back-end");
        }
      );
    }
  }
}
