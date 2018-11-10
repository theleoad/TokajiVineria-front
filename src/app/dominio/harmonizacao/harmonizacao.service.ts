import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, last, map, tap } from "rxjs/operators";

import { Harmonizacao } from "./harmonizacao";

@Injectable()
export class HarmonizacaoService {
  private URL: string = "http://localhost:8888";

  constructor(private http: HttpClient) {}

  buscarTodos(): Observable<Harmonizacao[]> {
    return this.http.get<Harmonizacao[]>(`${this.URL}/harmonizacao`);
  }

  buscarPeloId(id: number): Observable<Harmonizacao> {
    return this.http
      .get<Harmonizacao>(`${this.URL}/harmonizacao/${id}`)
      .pipe(map(response => response));
  }

  salvar(harmonizacao: Harmonizacao): Observable<Harmonizacao> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    if (harmonizacao.id) {
      return this.http.put<Harmonizacao>(
        `${this.URL}/harmonizacao`,
        JSON.stringify(harmonizacao),
        httpOptions
      );
    } else {
      return this.http.post<Harmonizacao>(
        `${this.URL}/harmonizacao`,
        JSON.stringify(harmonizacao),
        httpOptions
      );
    }
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/harmonizacao/${id}`);
  }
}
