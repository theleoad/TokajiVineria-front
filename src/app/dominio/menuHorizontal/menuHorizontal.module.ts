import { ProdutosFrontComponent } from "./../produto/produtos-front/produtos-front.component";
import { MenuHorizontalRouting } from "./menuHorizontal.routing";
import { MenuHorizontalComponent } from "./menuHorizontal/menuHorizontal.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [MenuHorizontalComponent, ProdutosFrontComponent],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Componente
    MenuHorizontalRouting
  ],
  providers: [
    // Serviços
  ]
})
export class MenuHorizontalModule {}
