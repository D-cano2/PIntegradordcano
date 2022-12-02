import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyect',
  templateUrl: './newproyect.component.html',
  styleUrls: ['./newproyect.component.css']
})
export class NewproyectComponent implements OnInit {

  nombre: string = '';
  descripcion: string = '';
 
  constructor(private proyectoS: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const proy = new Proyecto(this.nombre, this.descripcion);
    this.proyectoS.save(proy).subscribe(data => {
      alert("Proyecto añadido");
      this.router.navigate(['']);
  }, err => {
    alert("Falló");
    this.router.navigate(['']);
  })}
}


