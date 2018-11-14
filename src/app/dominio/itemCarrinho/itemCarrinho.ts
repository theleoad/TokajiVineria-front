import { Produto } from "./../produto/produto";

export class ItemCarrinho {
  constructor(public produto: Produto, public quantidade: number) {}
}
