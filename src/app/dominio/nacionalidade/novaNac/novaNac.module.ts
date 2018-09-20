import { NovaNacRouting } from "./novaNac.routing";
import { NovaNacComponent } from "./novaNac/novaNac.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [NovaNacComponent],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Componente
    NovaNacRouting
  ],
  providers: [
    // Serviços
  ]
})
export class NovaNacModule {}
