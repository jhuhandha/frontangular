import { Router, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProductoComponent } from './producto/producto.component';

export const appRoutes: Routes = [
    { path: 'usuario', component: UsuarioComponent  },
    { path: 'producto', component: ProductoComponent  },
    { path: '',      component: LoginComponent },
    { path: '**', component: LoginComponent }
  ];