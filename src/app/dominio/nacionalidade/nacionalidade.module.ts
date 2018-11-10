import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { NacionalidadeRouting } from "./nacionalidade.routing";
import { NacionalidadeService } from "./nacionalidade.service";
import { NacionalidadeListaComponent } from "./nacionalidade-lista/nacionalidade-lista.component";
import { NacionalidadeFormularioComponent } from "./nacionalidade-formulario/nacionalidade-formulario.component";

@NgModule({
  declarations: [NacionalidadeListaComponent, NacionalidadeFormularioComponent],
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
    NacionalidadeService
  ]
})
export class NacionalidadeModule {}
