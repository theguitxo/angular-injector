import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { APIURL, APP_CONFIG, FACTORY, setAppInjector } from './token';
import { PruebaService } from './prueba.service';

const CONFIG = {
  apiUrl: 'http://my.api.com',
  fake: true,
  title: 'Injection Token Example'
};

const testFactory = () => {
  return 'testFactory';
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: APIURL,
      useValue: 'http://SomeEndPoint.com/api'
    },
    {
      provide: APP_CONFIG,
      useValue: CONFIG
    },
    {
      provide: FACTORY,
      useFactory: testFactory
    },
    PruebaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    setAppInjector(injector);
  }
}
