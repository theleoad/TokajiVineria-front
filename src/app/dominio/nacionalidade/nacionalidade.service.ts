import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, last, map, tap } from "rxjs/operators";

import { Nacionalidade } from "./nacionalidade";

@Injectable()
export class NacionalidadeService {
  private URL: string = "http://localhost:8888";

  constructor(private http: HttpClient) {}

  buscarTodos(): Observable<Nacionalidade[]> {
    return this.http.get<Nacionalidade[]>(`${this.URL}/nacionalidade`);
  }

  buscarPeloId(id: number): Observable<Nacionalidade> {
    return this.http
      .get<Nacionalidade>(`${this.URL}/nacionalidade/${id}`)
      .pipe(map(response => response));
  }

  salvar(nacionalidade: Nacionalidade): Observable<Nacionalidade> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    if (nacionalidade.id) {
      return this.http.put<Nacionalidade>(
        `${this.URL}/nacionalidade`,
        JSON.stringify(nacionalidade),
        httpOptions
      );
    } else {
      return this.http.post<Nacionalidade>(
        `${this.URL}/nacionalidade`,
        JSON.stringify(nacionalidade),
        httpOptions
      );
    }
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/nacionalidade/${id}`);
  }
}
