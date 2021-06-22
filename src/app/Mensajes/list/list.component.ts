import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/Modelo/Mensaje';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title = 'instant-search';
    
  public questions = [
    '¿Cómo usar la plataforma','Obtener una cuenta gratuita'
 ]  
    
  constructor() {
  }
  ngOnInit(): void {
  }

}
