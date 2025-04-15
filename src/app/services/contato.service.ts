import { Injectable } from '@angular/core';
import {Contato} from '../models/contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  listaContatos: Contato[] = [];
  private currentId: number = 1;
  url: string = 'http://localhost:8080'

  constructor(private http: HttpClient) {
  }

  add(contato : Contato){

    if (!contato.name || !contato.email || !contato.phone) {
      alert("Preencha todos os campos antes de salvar o contato.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(contato.email)) {
      alert("E-mail inválido. Por favor, forneça um e-mail válido.");
      return;
    }

    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(contato.phone)) {
      alert("Telefone inválido. O telefone deve ter 10 ou 11 dígitos.");
      return;
    }

    contato.id = this.currentId++;
    return this.http.post<Contato>(this.url + '/contato', contato);
  }

  listarContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.url + '/contato');
  }

  remove(id : number){
    //this.listaContatos = this.listaContatos.filter(contato=> contato.id !== id)
    return this.http.delete<void>(this.url + '/contato/' + id);
  }

  filter(parametro: any){

    if(typeof(parametro) === 'number'){
      return this.listaContatos.filter(contato=> contato.id === parametro);
    }else {
      return this.listaContatos.filter(contato => contato.name === parametro);
    }
  }

}
