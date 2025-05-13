import { Component } from '@angular/core';
import {Grupo} from '../models/grupo';
import {Router} from '@angular/router';
import {GrupoService} from '../service/grupo.service';
import {FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {FormGroup, FormsModule} from '@angular/forms';
import {MenuItem} from 'primeng/api';
import {Menubar} from 'primeng/menubar';

@Component({
  selector: 'app-grupo',
  imports: [FormsModule, FloatLabelModule, ButtonModule, TableModule, Menubar],
  templateUrl: './grupo.component.html',
  styleUrl: './grupo.component.css'
})
export class GrupoComponent {
  name: string = '';
  listaGrupos: Grupo[]=[];
  form!: FormGroup;
  exibeModalEdicao: boolean = false;

  constructor(private service : GrupoService, private router: Router) {
    this.service.findAll().subscribe(grupos=>this.listaGrupos = grupos)
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


  salvar() {
    this.service.add({name: this.name})
      .subscribe(() => {
        this.service.findAll().subscribe(grupos => this.listaGrupos = grupos)
        this.name = "";
      })

  };

    deletar(grupo: number) {
      this.service.remove(grupo).subscribe(res => {
        this.service.findAll().subscribe(grupos=>this.listaGrupos = grupos)
      }, error => {
        console.error('Erro ao deletar grupo: ', error);
      });
    };

    /*
    update(){
      this.form.patchValue({
        id: grupo.id,
        nome: grupo.nome
      });
      this.exibeModalEdicao = true;
    }*/

}




