import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { UsuarioSignupComponent } from './usuario-signup/usuario-signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';
import { AppHeaderModule } from '../app-header/app-header.module';
import { AppFooterModule } from '../app-footer/app-footer.module';


@NgModule({
  declarations: [UsuarioLoginComponent, UsuarioSignupComponent, UsuarioPerfilComponent],
  imports: [
    CommonModule, ReactiveFormsModule, AppHeaderModule, AppFooterModule
  ],
  exports: [UsuarioLoginComponent, UsuarioSignupComponent,UsuarioPerfilComponent]
})
export class UsuarioModule { }
