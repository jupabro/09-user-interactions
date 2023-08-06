import { Component } from '@angular/core';
import { KittenWithId } from '../types';
import { UserKittenService } from '../services/user-kitten.service';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent {

  constructor(private userKittenService: UserKittenService) { }

  myKittens: KittenWithId[] = this.userKittenService.getKittens()

}
