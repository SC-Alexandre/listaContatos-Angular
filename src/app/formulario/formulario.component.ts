import { Component } from '@angular/core';
import {ContatoService} from '../service/contato.service';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import {Contato} from '../models/contato';
import {MenuItem} from 'primeng/api';
import {Menubar} from 'primeng/menubar';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule,  FloatLabelModule, ButtonModule, Menubar],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  listaContatos: Contato[] = [];

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

  constructor(private service : ContatoService, private router: Router) {}

  /*
  salvar() {
    this.service.add({name:this.name, email:this.email, phone: this.phone})
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/lista");
      });
  }*/

  salvar() {
    this.service.add({name: this.name, email: this.email, phone: this.phone})
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/lista").then(() => {
          // Após o cadastro, recarregue a lista de contatos
          this.service.findAll().subscribe(contatos => {
            this.listaContatos = contatos;
          });
        });
      });
  }


}
