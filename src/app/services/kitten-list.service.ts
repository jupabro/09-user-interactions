import { Injectable } from '@angular/core';
import { Kitten } from '../types';
import { KittenWithId } from '../types';

@Injectable({
  providedIn: 'root'
})
export class KittenListService {

  private kittens: KittenWithId[] = [];

  constructor() { }

  addKitten(kitten: Kitten): void {
    this.kittens.push({ ...kitten, id: Math.max(...this.kittens.map(k => k.id), 0) + 1 });
  }

  getKittens(): KittenWithId[] {
    return this.kittens;
  }

  removeKitten(kitten: KittenWithId): void {
    const index = this.kittens.indexOf(kitten)
    if (index > -1) { // only splice array when item is found
      this.kittens.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
}
