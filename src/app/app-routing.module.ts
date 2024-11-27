import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home';
import { ListagemComponente } from './page/listagem/listagem';
import { DetalhesComponente } from './page/detalhes/detalhes';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'listagem', component: ListagemComponente},
  { path: 'detalhes/:id', component: DetalhesComponente}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
