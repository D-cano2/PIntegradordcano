import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
/*importamos nuestros componentes*/

import { HomeComponent } from '../components/home/home.component';
import { NewExperienciaComponent } from '../components/experiencia/new-experiencia.component';
import { NeweducacionComponent } from '../components/educacion/neweducacion.component';
import { EditeducacionComponent } from '../components/educacion/editeducacion.component';
import { EditExperienciaComponent } from '../components/experiencia/edit-experiencia.component';
import { EditSkillComponent } from '../components/hys/edit-skill.component';
import { NewSkillComponent } from '../components/hys/new-skill.component';
import { LoginComponent } from '../components/login/login.component';


/*definimos nuestras rutas*/
const routes: Routes = [
  {path: 'login' , component:LoginComponent},
  {path: '' , component: HomeComponent},
  {path: 'nuevaexp', component:NewExperienciaComponent},
  {path: 'editexp/:id', component:EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
];


@NgModule({
  /* cargamos nuestras rutas*/
  declarations: [],
  imports:[RouterModule.forRoot(routes),
          FormsModule,
        ReactiveFormsModule,
      ],
  
  
   exports: [RouterModule,
    FormsModule,
  ]
})
export class AppRoutingModule { }
