import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, last, map, tap } from "rxjs/operators";

import { Funcionario } from "./funcionario";

@Injectable()
export class FuncionarioService {
  private URL: string = "http://localhost:8888";

  constructor(private http: HttpClient) {}

  buscarTodos(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.URL}/funcionario`);
  }

  buscarPeloId(id: number): Observable<Funcionario> {
    return this.http
      .get<Funcionario>(`${this.URL}/funcionario/${id}`)
      .pipe(map(response => response));
  }

  salvar(funcionario: Funcionario): Observable<Funcionario> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    if (funcionario.id) {
      return this.http.put<Funcionario>(
        `${this.URL}/funcionario`,
        JSON.stringify(funcionario),
        httpOptions
      );
    } else {
      return this.http.post<Funcionario>(
        `${this.URL}/funcionario`,
        JSON.stringify(funcionario),
        httpOptions
      );
    }
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/funcionario/${id}`);
  }
}
