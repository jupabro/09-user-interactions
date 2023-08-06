import { Component } from '@angular/core';
import { FormPopupService } from './services/form-popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kitten-story';

  constructor(private formService: FormPopupService) { }

  openCatForm() {
    this.formService.openForm()
  }

  scrollToSection(sectionId: 'section1' | 'section2') {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

  }
}
