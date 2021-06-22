import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './Mensajes/add/add.component';
import { ListComponent } from './Mensajes/list/list.component';
import { ErrorComponent } from './components/error/error.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    ErrorComponent,
    ContactoComponent,
    LoginComponent,
    RegistroComponent,
    AyudaComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
