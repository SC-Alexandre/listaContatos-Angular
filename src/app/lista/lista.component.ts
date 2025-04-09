import { Component } from '@angular/core';
import {Contato} from '../models/contato';
import {ContatoService} from '../services/contato.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-lista',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  listaContatos: Contato[] = [];

  constructor(private service : ContatoService) {
    this.listaContatos = this.service.listaContatos;
  }

  deletar(id :number) {
    this.service.remove(id);
    this.listaContatos = this.service.listaContatos;
  }

  detalhar(id: number) {
  }

}
