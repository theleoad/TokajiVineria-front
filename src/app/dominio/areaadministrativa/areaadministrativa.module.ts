import { AreaadministrativaRouting } from "./areaadministrativa.routing";
import { AreaadministrativaComponent } from "./areaadministrativa/areaadministrativa.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AreaadministrativaComponent],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Componente
    AreaadministrativaRouting
  ],
  providers: [
    // Serviços
  ]
})
export class AreaadministrativaModule {}
