import {Cancion} from "../cancion";

export class SharedAlbumModel {
  idCancion: number;
  amigos: string;
  idUser:number;

  constructor(idCancion: number, amigos: string, idUser: number) {
    this.idCancion = idCancion;
    this.amigos = amigos;
    this.idUser = idUser;
  }
}
