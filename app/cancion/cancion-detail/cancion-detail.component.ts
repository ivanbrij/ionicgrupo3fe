import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cancion } from '../cancion';
import {PopupModel} from "../models/popup-model";
import {CancionService} from "../cancion.service";
import {ToastrService} from "ngx-toastr";
import {SharedAlbumModel} from "../models/shared-album-model";

@Component({
  selector: 'app-cancion-detail',
  templateUrl: './cancion-detail.component.html',
  styleUrls: ['./cancion-detail.component.css']
})
export class CancionDetailComponent implements OnInit {

  @Input() cancion: Cancion;
  @Output() deleteCancion = new EventEmitter();

  userId: number;
  token: string;
  stateShare: boolean = false;
  cancionSelected:Cancion;

  constructor(
    private cancionService: CancionService,
    private toastr: ToastrService,
    private router: ActivatedRoute,
    private routerPath: Router
  ) { }

  ngOnInit() {
    this.userId = parseInt(this.router.snapshot.params.userId)
    this.token = this.router.snapshot.params.userToken

  }

  eliminarCancion(){
    this.deleteCancion.emit(this.cancion.id)
  }

  goToEdit(){
    this.routerPath.navigate([`/canciones/edit/${this.cancion.id}/${this.userId}/${this.token}`])
  }

  shareAlbum(cancion: Cancion): void {
     this.cancionSelected = cancion;
     this.stateShare = true;
  }

  processPopup(model: PopupModel) {
    if(model.cancelBtn) {
       this.stateShare = false;
       return;
    }

    if(model.acceptBtn) {
       if(model.text.length > 0) {
         this.stateShare = false;
         this.cancionService.compartirFavoritos(new SharedAlbumModel(this.cancionSelected.id, model.text, this.userId), this.token).subscribe(result=> {
           this.toastr.info(JSON.stringify(result.error), "Solicitud exitosa");
         }, error => {
           this.toastr.error(JSON.stringify(error.error), "Solicitud fallida")
         })
       } else {
         this.toastr.error("Debe ingresar algun usuario.", "Solicitud fallida")
       }

    }
  }

}
