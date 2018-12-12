import { ProdutosFrontComponent } from "./../produto/produtos-front/produtos-front.component";
import { MenuVerticalRouting } from "./menuVertical.routing";
import { MenuVerticalComponent } from "./menuVertical/menuVertical.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [MenuVerticalComponent, ProdutosFrontComponent],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Componente
    MenuVerticalRouting
  ],
  providers: [
    // Serviços
  ]
})
export class MenuVerticalModule {}
