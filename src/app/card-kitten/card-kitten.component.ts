import { Component, Input } from '@angular/core';
import { KittenWithId } from '../types';
import { KittenListService } from '../services/kitten-list.service';
import { UserKittenService } from '../services/user-kitten.service';

@Component({
  selector: 'app-card-kitten',
  templateUrl: './card-kitten.component.html',
  styleUrls: ['./card-kitten.component.scss']
})
export class CardKittenComponent {

  @Input() showButton: boolean = true;
  @Input() kitten!: KittenWithId

  constructor(private kittenService: KittenListService, private userKittenService: UserKittenService) { }

  adopt() {
    console.log(this.kitten)
    this.kittenService.removeKitten(this.kitten)
    this.userKittenService.addKitten(this.kitten)
  }
}
