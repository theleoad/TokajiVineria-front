import { Categoria } from "./../categoria/categoria";

export class Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: Categoria;
}
