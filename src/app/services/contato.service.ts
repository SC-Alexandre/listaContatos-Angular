import { Injectable } from '@angular/core';
import {Contato} from '../models/contato';
@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  listaContatos: Contato[] = [];

  add(contato : Contato){
    this.listaContatos.push(contato)
  }

  remove(id : number){
    console.log(id)
    this.listaContatos = this.listaContatos.filter(contato=> contato.id !== id)
    console.log(this.listaContatos)

  }

  constructor() { }
}
