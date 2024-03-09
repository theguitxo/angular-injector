import { Component, Inject, OnInit } from '@angular/core';
import { APIURL, APP_CONFIG, FACTORY, appInjector } from './token';
import { PruebaService } from './prueba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(APIURL) public ApiUrl: string,
    @Inject(APP_CONFIG) public Config: any,
    @Inject(FACTORY) public factory: string,
  ) {}

  ngOnInit(): void {
    console.log(this.ApiUrl);
    console.log(this.Config);
    console.log(this.factory);

    const prueba = appInjector.get(PruebaService);

    prueba.showMensaje();
  }
}
