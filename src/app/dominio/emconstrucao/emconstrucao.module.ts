import { EmconstrucaoRouting } from "./emconstrucao.routing";
import { EmconstrucaoComponent } from "./emconstrucao/emconstrucao.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [EmconstrucaoComponent],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Componente
    EmconstrucaoRouting
  ],
  providers: [
    // Serviços
  ]
})
export class EmconstrucaoModule {}
