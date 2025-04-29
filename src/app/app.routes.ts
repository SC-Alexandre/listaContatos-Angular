import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { InfoContatoComponent } from './info-contato/info-contato.component';
import { ListaComponent } from './lista/lista.component';
import {GrupoComponent} from './grupo/grupo.component';

export const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'info', component: InfoContatoComponent },
  { path: 'grupo', component: GrupoComponent },
  { path: '', redirectTo: 'formulario', pathMatch: 'full' }
];
