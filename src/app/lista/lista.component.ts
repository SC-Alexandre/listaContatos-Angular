import { Component } from '@angular/core';
import {Contato} from '../models/contato';
import {ContatoService} from '../service/contato.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {MenuItem} from 'primeng/api';
import {Menubar} from 'primeng/menubar';
import {TooltipModule} from 'primeng/tooltip';

@Component({
  selector: 'app-lista',
  imports: [FormsModule, CommonModule, TableModule, ButtonModule, Menubar, TooltipModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  listaContatos: Contato[] = [];

  constructor(private service : ContatoService, private router: Router) {
    this.service.findAll().subscribe(contatos =>this.listaContatos = contatos);
  }

  items: MenuItem[] = [
    {
      label: 'Novo Contato',
      routerLink: '/formulario'
    },
    {
      label: 'Lista Contatos',
      routerLink: '/lista'
    },
    {
      label: 'Grupos',
      routerLink: '/grupo'
    },
    /*{
      label: 'Novo Compromisso',
      routerLink: '/compromisso-formulario'
    },
    {
      label: 'Compromissos',
      routerLink: '/compromisso-lista'
    }*/
  ];

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

  alternarFavorito(contato: Contato) {
    if (contato.id === undefined) {
      alert("Contato sem ID válido!");
      return;
    }
    // Altera o estado localmente para feedback imediato (opcional)
    contato.favorito = !contato.favorito;

    // Chame o backend para atualizar o status
    this.service.atualizarFavorito(contato.id, contato.favorito).subscribe({
      next: () => {
        // Sucesso: pode exibir um toast ou apenas atualizar o visual
      },
      error: () => {
        // Se der erro, reverta o estado e avise o usuário
        contato.favorito = !contato.favorito;
        alert('Erro ao atualizar favorito.');
      }
    });
  }

}
