import { CategoriaRouting } from "./categoria.routing";
import { CategoriaComponent } from "./categoria/categoria.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [CategoriaComponent],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Componente
    CategoriaRouting
  ],
  providers: [
    // Serviços
  ]
})
export class CategoriaModule {}
