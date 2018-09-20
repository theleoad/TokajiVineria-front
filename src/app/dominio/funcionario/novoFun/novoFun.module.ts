import { NovoFunRouting } from "./novoFun.routing";
import { NovoFunComponent } from "./novoFun/novoFun.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [NovoFunComponent],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Componente
    NovoFunRouting
  ],
  providers: [
    // Serviços
  ]
})
export class NovoFunModule {}
