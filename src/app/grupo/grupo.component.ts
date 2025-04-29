import { Component } from '@angular/core';
import {Grupo} from '../models/grupo';
import {Router} from '@angular/router';
import {GrupoService} from '../service/grupo.service';

@Component({
  selector: 'app-grupo',
  imports: [],
  templateUrl: './grupo.component.html',
  styleUrl: './grupo.component.css'
})
export class GrupoComponent {
  name: string = '';
  grupos: Grupo[]=[];

  constructor(private service : GrupoService, private router: Router) {
    this.service.findAll().subscribe(grupos=>this.grupos = grupos)
  }
}
