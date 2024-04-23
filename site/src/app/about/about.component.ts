import { Component, Input, OnInit } from '@angular/core';
import { SectionData } from '../models/section-features.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  @Input() aboutData?: SectionData;

  timer = 5

  ngOnInit(): void {
    const interval = setInterval(() => {
      if (this.timer === 0) {
        clearInterval(interval)
      } else {
        this.timer--
      }
    }, 1000)
  }
}
