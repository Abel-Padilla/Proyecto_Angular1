import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Mensaje } from '../Modelo/Mensaje';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url="http://localhost:8080/demo/messages";

  getMessages(){
    return this.http.get<Mensaje[]>(this.Url);
  }
}
