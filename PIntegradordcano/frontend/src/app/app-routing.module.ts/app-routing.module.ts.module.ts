import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
/*importamos nuestros componentes*/
import { AcercaDeComponent } from '../components/acerca-de/acerca-de.component';
import { BannerComponent } from '../components/banner/banner.component';
import { HeaderComponent } from '../components/header/header.component';
import { LogoAPComponent } from '../components/logo-ap/logo-ap.component';

import { EducacionComponent } from '../components/educacion/educacion.component';
import { ExperienciaComponent } from '../components/experiencia/experiencia.component';
import { HyskillsComponent } from '../components/hyskills/hyskills.component';
import { ProyectoComponent } from '../components/proyecto/proyecto.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { FormsModule } from '@angular/forms';

/*definimos nuestras rutas*/
const routes: Routes = [
  {path: 'login' , component:LoginComponent},
  {path: '' , component: HomeComponent},
  {path: 'acercaDe' , component:AcercaDeComponent},
  {path: 'banner' , component:BannerComponent},
  {path: 'header' , component:HeaderComponent},
  {path: 'logo-ap' , component:LogoAPComponent},
 
  {path: 'educacion' , component:EducacionComponent},
  {path: 'experiencia' , component:ExperienciaComponent},
  {path: 'skills' , component:HyskillsComponent},
  {path: 'proyecto' , component:ProyectoComponent}
];


@NgModule({
  /* cargamos nuestras rutas*/
  declarations: [],
  imports:[RouterModule.forRoot(routes),
          FormsModule],
  
  
   exports: [RouterModule
  ]
})
export class AppRoutingModule { }
