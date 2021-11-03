import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  protected localStorageKey = '__my_app_storage__';


  public setSavedState(state: any, localStorageKey: string) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }

  public getSavedState(localStorageKey: string): any {
    return JSON.parse(localStorage.getItem(localStorageKey)!);
  }



}
