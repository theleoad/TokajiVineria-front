import { Categoria } from "./../categoria/categoria";
import { Nacionalidade } from "src/app/dominio/nacionalidade/nacionalidade";
import { Harmonizacao } from "src/app/dominio/harmonizacao/harmonizacao";

export class Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: Categoria;
  nacionalidade: Nacionalidade;
  harmonizacao: Harmonizacao;
}
