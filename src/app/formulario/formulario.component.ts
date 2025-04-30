import { Component } from '@angular/core';
import {ContatoService} from '../service/contato.service';
import {FormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import {Contato} from '../models/contato';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, RouterLink, FloatLabelModule, ButtonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  listaContatos: Contato[] = [];

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
