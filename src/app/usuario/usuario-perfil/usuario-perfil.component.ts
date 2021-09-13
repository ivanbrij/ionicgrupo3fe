import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../usuario';



@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.css']
})
export class UsuarioPerfilComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private routerPath: Router,
    private router: ActivatedRoute
  ) { }

  userId: number;
  token: string;
  usuarioSeleccionado: Usuario;

  ngOnInit() {
    this.userId = parseInt(this.router.snapshot.params.userId)
    this.token = this.router.snapshot.params.userToken
    this.getUsuario();
  }

  getUsuario():void{
    this.usuarioService.getUsuario(this.userId, this.token)
    .subscribe(usuario =>{
      this.usuarioSeleccionado=usuario;})

  }

}
