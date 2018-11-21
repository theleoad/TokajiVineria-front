import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, last, map, tap } from "rxjs/operators";

import { Fornecedor } from "./fornecedor";

@Injectable()
export class FornecedorService {
  private URL: string = "http://localhost:8888";

  constructor(private http: HttpClient) {}

  buscarTodos(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(`${this.URL}/fornecedor`);
  }

  buscarPeloId(id: number): Observable<Fornecedor> {
    return this.http
      .get<Fornecedor>(`${this.URL}/fornecedor/${id}`)
      .pipe(map(response => response));
  }

  salvar(fornecedor: Fornecedor): Observable<Fornecedor> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    if (fornecedor.id) {
      return this.http.put<Fornecedor>(
        `${this.URL}/fornecedor`,
        JSON.stringify(fornecedor),
        httpOptions
      );
    } else {
      return this.http.post<Fornecedor>(
        `${this.URL}/fornecedor`,
        JSON.stringify(fornecedor),
        httpOptions
      );
    }
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/fornecedor/${id}`);
  }
}
