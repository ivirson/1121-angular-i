import { Component, Input } from '@angular/core';
import { SectionData } from '../models/section-features.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @Input() aboutData?: SectionData;
}
