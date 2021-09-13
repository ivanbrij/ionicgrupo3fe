import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../usuario/usuario.service';
import { Usuario } from '../../usuario/usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
    private usuarioService: UsuarioService
    ) { }

  userId: number;
  token: string;
  usuarioSeleccionado: Usuario;


  ngOnInit(): void {
      this.userId = parseInt(this.router.snapshot.params.userId)
      this.token = this.router.snapshot.params.userToken
      this.getUsuario();
    }

  getUsuario():void{
    this.usuarioService.getUsuario(this.userId, this.token)
    .subscribe(usuario =>{
      this.usuarioSeleccionado=usuario;})

  }

  goTo(menu: string){
    const userId = parseInt(this.router.snapshot.params.userId)
    const token = this.router.snapshot.params.userToken
    if(menu === "logIn"){
      this.routerPath.navigate([`/`])
    }
    else if(menu === "album"){
      this.routerPath.navigate([`/albumes/${userId}/${token}`])
    }
    else if(menu === "cancion"){
      this.routerPath.navigate([`/canciones/${userId}/${token}`])
    }
    else if(menu === "perfilUsuario"){
      this.routerPath.navigate([`/perfil/${userId}/${token}`])
    }

  }

}
