import { Component } from '@angular/core';
import { KittenWithId } from '../types';
import { KittenListService } from '../services/kitten-list.service';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent {

  constructor(private kittenService: KittenListService) { }

  kittenList: KittenWithId[] = this.kittenService.getKittens();

}
