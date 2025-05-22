import { Routes } from '@angular/router';
import { ListagemComponent } from './apontamento/listagem/listagem.component';
import { CadastroComponent } from './apontamento/cadastro/cadastro.component';
import { EdicaoComponent } from './apontamento/edicao/edicao.component';

export const routes: Routes = [

    { path: '', redirectTo: 'listagem', pathMatch: 'full'},

    { path: 'listagem', component: ListagemComponent },

    { path: 'cadastro', component: CadastroComponent },

    { path: 'edicao/:id', component: EdicaoComponent }
];
