import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from './experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
baseURL = 'https://back-heroku-2022.herokuapp.com/explab';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    
    return this.httpClient.get<Experiencia[]>(this.baseURL + 'lista');

  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.baseURL + `deatil/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.baseURL + `create`, experiencia);

  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.baseURL + `update/${id}`,experiencia);


  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.baseURL + `delete/${id}`);
  }
}


