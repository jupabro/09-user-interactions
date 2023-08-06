import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateKittenComponent } from '../create-kitten/create-kitten.component';

@Injectable({
  providedIn: 'root'
})
export class FormPopupService {

  constructor(private form: MatDialog) { }

  openForm() {
    console.log("open form")
    this.form.open(CreateKittenComponent)
  }
  closeForm() {
    console.log("close form")
    this.form.closeAll
  }
}
