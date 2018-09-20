import { NovaCatRouting } from "./novaCat.routing";
import { NovaCatComponent } from "./novaCat/novaCat.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [NovaCatComponent],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Componente
    NovaCatRouting
  ],
  providers: [
    // Serviços
  ]
})
export class NovaCatModule {}
