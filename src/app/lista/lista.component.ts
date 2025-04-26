import { Component } from '@angular/core';
import {Contato} from '../models/contato';
import {ContatoService} from '../services/contato.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-lista',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  listaContatos: Contato[] = [];

  constructor(private service : ContatoService, private router: Router) {
    this.service.findAll().subscribe(contatos =>this.listaContatos = contatos);
  }

  deletar(id :number) {
    this.service.remove(id).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/lista");
    });
    this.listaContatos = this.service.listaContatos;
  }

  detalhar(id: number) {

  }
}
