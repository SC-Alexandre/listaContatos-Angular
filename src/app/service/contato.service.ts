import { Injectable } from '@angular/core';
import {Contato} from '../models/contato';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContatoService {
  listaContatos: Contato[] = [];
  url: string = 'http://localhost:8080';

  constructor(private http : HttpClient) { }

  add(contato: Contato):Observable<Contato>{
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

    return this.http.post<Contato>(this.url + '/contatos', contato);

  }

  remove(id : number):Observable<void>{
    this.listaContatos = this.listaContatos.filter(contato=> contato.id !== id)
    return this.http.delete<void>(this.url + '/contatos/' + id);
  }

  findAll():Observable<Contato[]>{
    return this.http.get<Contato[]>(this.url + '/contatos')
  }
}
