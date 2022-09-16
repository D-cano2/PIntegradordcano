import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
onCreate() {
throw new Error('Method not implemented.');
}
descripcion: any;
nombre: any;

  constructor() { }

  ngOnInit(): void {
  }

}
