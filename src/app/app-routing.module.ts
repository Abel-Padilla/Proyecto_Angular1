import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AddComponent } from './Mensajes/add/add.component';
import { ListComponent } from './Mensajes/list/list.component';

const routes: Routes = [
  {path:"list", component:ListComponent},
  {path:"add",component:AddComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegistroComponent},
  {path:"contacto",component:ContactoComponent},
  {path:"ayuda",component:AyudaComponent},
  {path:"inicio",component:MainComponent},
  {path:"**",component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
