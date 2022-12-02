import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  baseURL = environment.baseURL +'proyect/';

  constructor(private httpClient: HttpClient) { }
  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.baseURL + 'lista');
  }

  public detail(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.baseURL + `detail/${id}`);
  }

  public save(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.baseURL + 'create', proyecto);
   }

   public update(id: number, proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.baseURL + `update/${id}`, proyecto);
   }

   public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseURL + `delete/${id}`);
   }
}

