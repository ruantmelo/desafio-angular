import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NameFrequency } from './name-frequency';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NamesService {
  baseUrl = "https://servicodados.ibge.gov.br/api/v2/censos/nomes"
  constructor(private http: HttpClient) { }

  getNameFrequency(name: string): Observable<NameFrequency | undefined>{
    console.log(`NamesService: getNameFrequency(${name})`)
    return this.http.get<NameFrequency>(`${this.baseUrl}/${name}`)
    // .pipe(
    //   tap(_ => this.log(`fetched name=${name}`)),
    //   catchError(this.handleError<undefined>('getNameFrequency', undefined))
    // )
  }
  private log(message: string) {
    console.log(`NamesService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
