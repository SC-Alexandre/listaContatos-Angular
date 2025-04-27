import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { InfoContatoComponent } from './info-contato/info-contato.component';
import { ListaComponent } from './lista/lista.component';
import {FormularioGrupoComponent} from './grupo-formulario/grupo-formulario.component';
import {ListaGrupoComponent} from './grupo-lista/-grupo-lista.component';


export const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'info', component: InfoContatoComponent },
  { path: 'grupo-formulario', component: GrupoFormularioComponent },
  { path: 'grupo-lista', component: GrupoListaComponent },
  { path: '', redirectTo: 'formulario', pathMatch: 'full' }
];
