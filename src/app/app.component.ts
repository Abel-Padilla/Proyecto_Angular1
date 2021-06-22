import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto1';
  constructor(private router:Router){}
    List(){
      this.router.navigate(["list"])
    }
    New(){
      this.router.navigate(["add"])
    }
    Contacto(){
      this.router.navigate(["contacto"])
    }
    Ayuda(){
      this.router.navigate(["ayuda"])
    }
    Login(){
      this.router.navigate(["login"])
    }
    Registro(){
      this.router.navigate(["registro"])
    }
    Inicio(){
      this.router.navigate(["inicio"])
    }
  
}
