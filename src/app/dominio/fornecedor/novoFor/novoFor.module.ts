import { NovoForRouting } from "./novoFor.routing";
import { NovoForComponent } from "./novoFor/novoFor.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [NovoForComponent],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Componente
    NovoForRouting
  ],
  providers: [
    // Serviços
  ]
})
export class NovoForModule {}
