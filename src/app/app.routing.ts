import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: "", loadChildren: "./dominio/home/home.module#HomeModule" },
  {
    path: "home",
    loadChildren: "./dominio/home/home.module#HomeModule"
  },
  {
    path: "produto",
    loadChildren: "./dominio/produto/produto.module#ProdutoModule"
  },
  {
    path: "categoria",
    loadChildren: "./dominio/categoria/categoria.module#CategoriaModule"
  },
  {
    path: "areaadministrativa",
    loadChildren:
      "./dominio/areaadministrativa/areaadministrativa.module#AreaadministrativaModule"
  },
  {
    path: "nacionalidade",
    loadChildren:
      "./dominio/nacionalidade/nacionalidade.module#NacionalidadeModule"
  },
  {
    path: "harmonizacao",
    loadChildren:
      "./dominio/harmonizacao/harmonizacao.module#HarmonizacaoModule"
  },
  {
    path: "fornecedor",
    loadChildren: "./dominio/fornecedor/fornecedor.module#FornecedorModule"
  },
  {
    path: "funcionario",
    loadChildren: "./dominio/funcionario/funcionario.module#FuncionarioModule"
  },
  {
    path: "meusvinhos",
    loadChildren: "./dominio/meusvinhos/meusvinhos.module#MeusvinhosModule"
  },
  {
    path: "emconstrucao",
    loadChildren:
      "./dominio/emconstrucao/emconstrucao.module#EmconstrucaoModule"
  },
  {
    path: "novofor",
    loadChildren: "./dominio/fornecedor/novoFor/novoFor.module#NovoForModule"
  },
  {
    path: "novofun",
    loadChildren: "./dominio/funcionario/novoFun/novoFun.module#NovoFunModule"
  },
  {
    path: "novahar",
    loadChildren: "./dominio/harmonizacao/novaHar/novaHar.module#NovaHarModule"
  },
  {
    path: "novanac",
    loadChildren: "./dominio/nacionalidade/novaNac/novaNac.module#NovaNacModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRouting {}
