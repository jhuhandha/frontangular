import { Router, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';

export const appRoutes: Routes = [
    { path: 'usuario', component: UsuarioComponent  },
    { path: '',      component: LoginComponent },
    { path: '**', component: LoginComponent }
  ];