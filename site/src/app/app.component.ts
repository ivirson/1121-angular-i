import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage: 'HOME' | 'ABOUT' | 'CONTACT' | 'ADDRESS' = 'HOME';

  goToAbout(): void {
    this.currentPage = 'ABOUT';
  }
}
