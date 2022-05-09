import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
/*importamos nuestros componentes*/
import { AcercaDeComponent } from '../components/acerca-de/acerca-de.component';
import { BannerComponent } from '../components/banner/banner.component';
import { HeaderComponent } from '../components/header/header.component';
import { LogoAPComponent } from '../components/logo-ap/logo-ap.component';
import { RsocialComponent } from '../components/rsocial/rsocial.component';
import { EducacionComponent } from '../components/educacion/educacion.component';
import { ExperienciaComponent } from '../components/experiencia/experiencia.component';
import { HyskillsComponent } from '../components/hyskills/hyskills.component';
import { ProyectoComponent } from '../components/proyecto/proyecto.component';

/*definimos nuestras rutas*/
const routes: Routes = [
  {path: 'acercaDe' , component:AcercaDeComponent},
  {path: 'banner' , component:BannerComponent},
  {path: 'header' , component:HeaderComponent},
  {path: 'logo-ap' , component:LogoAPComponent},
  {path: 'isocial' , component:RsocialComponent},
  {path: 'educacion' , component:EducacionComponent},
  {path: 'experiencia' , component:ExperienciaComponent},
  {path: 'skills' , component:HyskillsComponent},
  {path: 'proyecto' , component:ProyectoComponent}
];


@NgModule({
  /* cargamos nuestras rutas*/
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  
  
   exports: [RouterModule
  ]
})
export class AppRoutingModule { }
