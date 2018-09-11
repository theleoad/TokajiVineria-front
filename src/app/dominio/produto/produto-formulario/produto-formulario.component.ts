import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/dominio/produto/produto.service';
import { Produto } from 'src/app/dominio/produto/produto';
import { Router } from '@angular/router/';

@Component({
  selector: 'produto-lista',
  templateUrl: './produto-formulario.component.html',
  styleUrls: ['./produto-formulario.component.css']
})
export class ProdutoFormularioComponent implements OnInit {

    produtoForm: FormGroup;

    constructor(
      private builder: FormBuilder,
      private produtoService: ProdutoService,
      private router: Router,
    ){

    }

    ngOnInit() {
        this.produtoForm = this.builder.group({
          id:[],
          nome:['', Validators.required],
          descricao:[],
          preco:[]
        })
    }

    salvar(produto: Produto) {
      this.produtoService.salvar(produto)
        .subscribe(response => {
          this.router.navigate(['/produto']);
          console.log(response);
        })
    }

}
