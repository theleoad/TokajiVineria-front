import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { FornecedorRouting } from "./fornecedor.routing";
import { FornecedorService } from "./fornecedor.service";
import { FornecedorListaComponent } from "./fornecedor-lista/fornecedor-lista.component";
import { FornecedorFormularioComponent } from "./fornecedor-formulario/fornecedor-formulario.component";

@NgModule({
  declarations: [FornecedorListaComponent, FornecedorFormularioComponent],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Componente
    FornecedorRouting
  ],
  providers: [
    // Serviços
    FornecedorService
  ]
})
export class FornecedorModule {}
