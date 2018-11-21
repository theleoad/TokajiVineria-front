import { FavoritoRouting } from "./favorito.routing";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FavoritoListComponent } from "./favorito-list/favorito-list.component";
import { NgModule } from "@angular/core";
import { FavoritoService } from "./favorito.service";

@NgModule({
  declarations: [FavoritoListComponent],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Component
    FavoritoRouting
  ],
  providers: [
    // Serviços
    FavoritoService
  ]
})
export class FavoritoModule {}
