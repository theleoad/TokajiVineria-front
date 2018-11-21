import { Produto } from "./../produto/produto";

export class ItemFavorito {
  constructor(public produto: Produto, public quantidade: number) {}
}
