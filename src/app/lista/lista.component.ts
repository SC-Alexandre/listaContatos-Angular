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
    this.service.listarContatos().subscribe(contatos => this.listaContatos = contatos);
  }

  deletar(id: number) {
    this.service.remove(id).subscribe({
      next: () => {
        this.service.listarContatos().subscribe(contatos => this.listaContatos = contatos);
      },
      error: (erro) => {
        console.error('Erro ao deletar contato:', erro);
      }
    });
  }


  detalhar(id: number) {
  }

}
