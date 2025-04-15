import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Contato} from '../models/contato';
import {ContatoService} from '../services/contato.service';

@Component({
  selector: 'app-info-contato',
  imports: [],
  templateUrl: './info-contato.component.html',
  styleUrl: './info-contato.component.css'
})
export class InfoContatoComponent {
  /*contato?: Contato;

  constructor(private route: ActivatedRoute, private service: ContatoService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.listarContatos().subscribe(contatos => {
      this.contato = contatos.find(c => c.id === id);
    });
  }*/
}
