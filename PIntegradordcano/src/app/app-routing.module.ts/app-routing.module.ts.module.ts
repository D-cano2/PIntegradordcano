import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
/*importamos nuestros componentes*/
import { AcercaDeComponent } from '../components/acerca-de/acerca-de.component';
import { BannerComponent } from '../components/banner/banner.component';
import { HeaderComponent } from '../components/header/header.component';
import { LogoAPComponent } from '../components/logo-ap/logo-ap.component';
import { RsocialComponent } from '../components/rsocial/rsocial.component';

/*definimos nuestras rutas*/
const routes: Routes = [
  {path: 'acercaDe' , component:AcercaDeComponent},
  {path: 'banner' , component:BannerComponent},
  {path: 'header' , component:HeaderComponent},
  {path: 'logo-ap' , component:LogoAPComponent},
  {path: 'isocial' , component:RsocialComponent},
];


@NgModule({
  /* cargamos nuestras rutas*/
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  
  
   exports: [RouterModule
  ]
})
export class AppRoutingModule { }
