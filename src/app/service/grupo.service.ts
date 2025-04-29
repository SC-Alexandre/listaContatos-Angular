import { Injectable } from '@angular/core';
import {Grupo} from '../models/grupo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  listaGrupos: Grupo[] = [];
  url: string = 'http://localhost:8080';

  constructor(private http : HttpClient) { }

  add(grupo : Grupo):Observable<Grupo>{
    if (!grupo.name){
      alert("Preencha o nome do grupo.");
    }
    return this.http.post<Grupo>(this.url + '/grupos', grupo);
  }

  remove(id : number):Observable<void>{
    this.listaGrupos = this.listaGrupos.filter(grupo=> grupo.id !== id)
    return this.http.delete<void>(this.url + '/grupos/' + id);
  }

  filter(parametro: any){
    if(typeof(parametro) === 'number'){
      return this.listaGrupos.filter(grupo=> grupo.id === parametro);
    }else {
      return this.listaGrupos.filter(grupo => grupo.name === parametro);
    }
  }

  findAll():Observable<Grupo[]>{
    return this.http.get<Grupo[]>(this.url + '/grupos')
  }
}
