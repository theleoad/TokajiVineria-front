import { FuncionarioRouting } from "./funcionario.routing";
import { FuncionarioComponent } from "./funcionario/funcionario.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [FuncionarioComponent],
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
  ]
})
export class FuncionarioModule {}
