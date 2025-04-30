import { Component } from '@angular/core';
import {Grupo} from '../models/grupo';
import {Router} from '@angular/router';
import {GrupoService} from '../service/grupo.service';
import {FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-grupo',
  imports: [FormsModule, FloatLabelModule, ButtonModule, TableModule],
  templateUrl: './grupo.component.html',
  styleUrl: './grupo.component.css'
})
export class GrupoComponent {
  name: string = '';
  listaGrupos: Grupo[]=[];

  constructor(private service : GrupoService, private router: Router) {
    this.service.findAll().subscribe(grupos=>this.listaGrupos = grupos)
  }

  salvar() {
    this.service.add({name:this.name})
      .subscribe(res => {
        console.log(res);
        //this.router.navigateByUrl("/lista");
      });
  }
}
