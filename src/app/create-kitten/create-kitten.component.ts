import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { KittenListService } from '../services/kitten-list.service';
import { Kitten } from '../types';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent {

  inputs: Kitten = {
    name: "",
    breed: "",
    birthday: "",
    img: "https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
  }

  constructor(private dialogRef: MatDialogRef<CreateKittenComponent>, private kittenService: KittenListService) { }

  validateBirthday(birthdayRef: any) {

    const validFormats = [/^\d{4}$/, /^\d{4}-\d{2}$/, /^\d{4}-\d{2}-\d{2}$/];

    if (birthdayRef.value && !validFormats.some(format => format.test(birthdayRef.value))) {
      birthdayRef.control.setErrors({ 'invalidBirthday': true });
    } else {
      birthdayRef.control.setErrors(null);
    }
  }

  onSubmit() {
    console.log(this.inputs)
    this.dialogRef.close();
    this.kittenService.addKitten(this.inputs)
  }
}
