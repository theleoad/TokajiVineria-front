import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { FuncionarioRouting } from "./funcionario.routing";
import { FuncionarioService } from "./funcionario.service";
import { FuncionarioListaComponent } from "./funcionario-lista/funcionario-lista.component";
import { FuncionarioFormularioComponent } from "./funcionario-formulario/funcionario-formulario.component";

@NgModule({
  declarations: [FuncionarioListaComponent, FuncionarioFormularioComponent],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Componente
    FuncionarioRouting
  ],
  providers: [
    // Serviços
    FuncionarioService
  ]
})
export class FuncionarioModule {}
