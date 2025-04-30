import { Component } from '@angular/core';
import {Contato} from '../models/contato';
import {ContatoService} from '../service/contato.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-lista',
  imports: [FormsModule, CommonModule, RouterLink, TableModule, ButtonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  listaContatos: Contato[] = [];

  constructor(private service : ContatoService, private router: Router) {
    this.service.findAll().subscribe(contatos =>this.listaContatos = contatos);
  }

  /*deletar(id :number) {
    this.service.remove(id).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/lista");
    });
    this.listaContatos = this.service.listaContatos;
  }*/

  deletar(id: number) {
    this.service.remove(id).subscribe(res => {
      // Adicionando um log para verificar a resposta
      console.log('Resposta após exclusão: ', res);
      this.listaContatos = this.listaContatos.filter(contato => contato.id !== id);
    }, error => {
      console.error('Erro ao deletar contato: ', error);
    });
  }

}
