import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './Componentes/main/main.component';
import { SobreMimComponent } from './componentes/sobre-mim/sobre-mim.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'PaginaPrincipal',
    pathMatch: 'full'
    
  },
  
  { 
    path: 'PaginaPrincipal', 
    component: MainComponent
  },

  {
    path: 'sobreMim',
    component: SobreMimComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
