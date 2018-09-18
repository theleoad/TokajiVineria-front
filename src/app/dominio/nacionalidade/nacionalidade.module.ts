import { NacionalidadeRouting } from "./nacionalidade.routing";
import { NacionalidadeComponent } from "./nacionalidade/nacionalidade.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [NacionalidadeComponent],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Componente
    NacionalidadeRouting
  ],
  providers: [
    // Serviços
  ]
})
export class NacionalidadeModule {}
