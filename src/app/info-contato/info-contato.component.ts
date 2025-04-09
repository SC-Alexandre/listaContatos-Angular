import { Component } from '@angular/core';
import {Contato} from '../models/contato';
import {ContatoService} from '../services/contato.service';

@Component({
  selector: 'app-info-contato',
  imports: [],
  templateUrl: './info-contato.component.html',
  styleUrl: './info-contato.component.css'
})
export class InfoContatoComponent {
  /*contato : Contato;

  constructor(private service : ContatoService) {
    this.contatos = this.service.filter();
  }*/
}
