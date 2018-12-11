import { ProdutosFrontComponent } from "./../produto/produtos-front/produtos-front.component";
import { TopoRouting } from "./topo.routing";
import { TopoComponent } from "./topo/topo.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [TopoComponent, ProdutosFrontComponent],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Componente
    TopoRouting
  ],
  providers: [
    // Serviços
  ]
})
export class TopoModule {}
