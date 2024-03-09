import { InjectionToken, Injector } from '@angular/core';

export const APIURL = new InjectionToken('');
export const APP_CONFIG = new InjectionToken<any>('Application.Config');
export const FACTORY = new InjectionToken<string>('Factory');

export let appInjector: Injector;

export function setAppInjector(injector: Injector) {
  if (!appInjector) {
    appInjector = injector;
  }
}

