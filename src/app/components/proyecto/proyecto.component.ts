import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/proyecto.service';

import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyect: Proyecto[] = [];

  constructor( private sproyecto: SProyectoService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void{
    this.sproyecto.lista().subscribe((data: Proyecto[]) =>{this.proyect = data})
  }

  delete(id?: number){
    if(id != undefined){
      this.sproyecto.delete(id).subscribe(
        (        data: any) => {
          this.cargarProyecto();
        }, (err: any) => {
          alert("No se pudo borrar el proyecto");
        }
      )
    }
  }
}
