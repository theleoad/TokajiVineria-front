import { FornecedorRouting } from "./fornecedor.routing";
import { FornecedorComponent } from "./fornecedor/fornecedor.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [FornecedorComponent],
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
  ]
})
export class FornecedorModule {}
