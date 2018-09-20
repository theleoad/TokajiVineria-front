import { NovaHarRouting } from "./novaHar.routing";
import { NovaHarComponent } from "./novaHar/novaHar.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [NovaHarComponent],
  imports: [
    // Angular
    HttpModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Componente
    NovaHarRouting
  ],
  providers: [
    // Serviços
  ]
})
export class NovaHarModule {}
