import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
baseURL = 'https://back-heroku-2022.herokuapp.com/personas/';
  

constructor(private http: HttpClient) { }

public getPersona(): Observable<persona>{
  return this.http.get<persona>(this.baseURL+ 'traer/perfil');
  
}
}
