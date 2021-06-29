import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeNosotrosComponent } from './acerca-de-nosotros/acerca-de-nosotros.component';
import { LoginComponent } from './login/login.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { PagoComponent } from './pago/pago.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'pago', component: PagoComponent },
  { path: 'nosotros', component: AcercaDeNosotrosComponent },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
