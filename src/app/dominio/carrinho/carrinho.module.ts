import { CarrinhoRouting } from "./carrinho.routing";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { CarrinhoListComponent } from "./carrinho-list/carrinho-list.component";
import { NgModule } from "@angular/core";
import { CarrinhoService } from "./carrinho.service";

@NgModule({
  declarations: [CarrinhoListComponent],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Component
    CarrinhoRouting
  ],
  providers: [
    // Serviços
    CarrinhoService
  ]
})
export class CarrinhoModule {}
