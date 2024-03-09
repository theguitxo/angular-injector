import { Injectable } from "@angular/core";

@Injectable()
export class PruebaService {
  private mensaje = 'hola';

  public showMensaje(): void {
    console.log(this.mensaje);
  }
}
