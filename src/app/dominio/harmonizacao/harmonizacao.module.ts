import { HarmonizacaoRouting } from "./harmonizacao.routing";
import { HarmonizacaoComponent } from "./harmonizacao/harmonizacao.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HarmonizacaoComponent],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Componente
    HarmonizacaoRouting
  ],
  providers: [
    // Serviços
  ]
})
export class HarmonizacaoModule {}
