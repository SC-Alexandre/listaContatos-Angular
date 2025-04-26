import { Injectable } from '@angular/core';
import {Contato} from '../models/contato';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContatoService {
  listaContatos: Contato[] = [];
  private currentId: number = 1;
  url: string = 'http://localhost:8080';

  constructor(private http : HttpClient) { }

  add(contato : Contato):Observable<Contato>{
    if (!contato.name || !contato.email || !contato.phone) {
      alert("Preencha todos os campos antes de salvar o contato.");
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(contato.email)) {
      alert("E-mail inválido. Por favor, forneça um e-mail válido.");
    }

    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(contato.phone)) {
      alert("Telefone inválido. O telefone deve ter 10 ou 11 dígitos.");
    }

    contato.number = this.currentId;

    return this.http.post<Contato>(this.url + '/contatos', contato);
    this.listaContatos.push(contato)
    this.currentId++;
  }

  remove(id : number):Observable<void>{
    this.listaContatos = this.listaContatos.filter(contato=> contato.number !== id)
    return this.http.delete<void>(this.url + '/contatos/' + id);
  }

  filter(parametro: any){
    if(typeof(parametro) === 'number'){
      return this.listaContatos.filter(contato=> contato.number === parametro);
    }else {
      return this.listaContatos.filter(contato => contato.name === parametro);
    }
  }

  findAll():Observable<Contato[]>{
    return this.http.get<Contato[]>(this.url + '/contatos')
  }
}
