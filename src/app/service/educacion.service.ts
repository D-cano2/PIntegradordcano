import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  baseURL = 'https://back-heroku-2022.herokuapp.com/educacion/';


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.baseURL + 'lista')
;
  }

  public detail(id: number): Observable<Educacion>{
return this.httpClient.get<Educacion>(this.baseURL + `detail/${id
}`);
  }

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.baseURL + 'create', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.baseURL + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.baseURL + `delete/${id}`);
    }
}
