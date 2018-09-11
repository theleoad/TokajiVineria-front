import { Component, OnInit } from '@angular/core';

import { Produto } from '../produto';
import { ProdutoService } from '../../produto/produto.service';

@Component({
  selector: 'produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

    produtos: Produto[];

    constructor(private produtoService: ProdutoService){}

    ngOnInit() {
        
      this.produtoService.buscarTodos()
      .subscribe(produtos => {
        this.produtos = produtos
      });

    }

}
