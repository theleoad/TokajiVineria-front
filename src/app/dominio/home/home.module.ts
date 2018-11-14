import { ProdutosFrontComponent } from "./../produto/produtos-front/produtos-front.component";
import { HomeRouting } from "./home.routing";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HomeComponent, ProdutosFrontComponent],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Componente
    HomeRouting
  ],
  providers: [
    // Serviços
  ]
})
export class HomeModule {}
