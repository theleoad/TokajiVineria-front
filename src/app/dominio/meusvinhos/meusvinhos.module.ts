import { MeusvinhosRouting } from "./meusvinhos.routing";
import { MeusvinhosComponent } from "./meusvinhos/meusvinhos.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [MeusvinhosComponent],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Componente
    MeusvinhosRouting
  ],
  providers: [
    // Serviços
  ]
})
export class MeusvinhosModule {}
