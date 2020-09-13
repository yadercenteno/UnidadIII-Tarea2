import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PoliticaComponent } from './components/politica/politica.component';
import { AcercaComponent } from './components/acerca/acerca.component';

const routes: Routes = [
  {path: 'productos', component: ProductosComponent},
  {path: 'producto/:id', component: ProductoComponent},
  {path: 'politica', component: PoliticaComponent},
  {path: 'acerca', component: AcercaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'productos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
