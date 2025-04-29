import { Component } from '@angular/core';
import {ContatoService} from '../service/contato.service';
import {FormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, RouterLink],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  number: number = 0;
  name: string = '';
  email: string = '';
  phone: string = '';

  constructor(private service : ContatoService, private router: Router) {}

  salvar() {
    this.service.add({number:this.number, name:this.name, email:this.email, phone: this.phone})
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/lista");
      });
  }

}
