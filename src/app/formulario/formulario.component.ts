import { Component } from '@angular/core';
import {ContatoService} from '../services/contato.service';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, RouterLink],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  id: number = 0;
  name: string = '';
  email: string = '';
  phone: string = '';

  constructor(private service : ContatoService) {}

  salvar() {
    this.service.add({id:this.id, name:this.name, email:this.email, phone: this.phone});
  }

}
