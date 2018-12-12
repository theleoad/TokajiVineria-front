import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { HarmonizacaoRouting } from "./harmonizacao.routing";
import { HarmonizacaoService } from "./harmonizacao.service";
import { HarmonizacaoListaComponent } from "./harmonizacao-lista/harmonizacao-lista.component";
import { HarmonizacaoFormularioComponent } from "./harmonizacao-formulario/harmonizacao-formulario.component";
import { MenuVerticalComponent } from "src/app/dominio/menuVertical/menuVertical/menuVertical.component";

@NgModule({
  declarations: [
    HarmonizacaoListaComponent,
    HarmonizacaoFormularioComponent,
    MenuVerticalComponent
  ],
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
    HarmonizacaoService
  ]
})
export class HarmonizacaoModule {}
