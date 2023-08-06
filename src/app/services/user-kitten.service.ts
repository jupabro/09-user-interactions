import { Injectable } from '@angular/core';
import { KittenWithId } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UserKittenService {

  private myKittens: KittenWithId[] = [];

  constructor() { }

  addKitten(kitten: KittenWithId): void {
    this.myKittens.push({ ...kitten});
  }

  getKittens(): KittenWithId[] {
    return this.myKittens;
  }
}
