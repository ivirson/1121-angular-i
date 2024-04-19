import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SectionContact } from '../models/section-features.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  @Input() contactData!: SectionContact;
  @Output() saveDataEmitter: EventEmitter<SectionContact> = new EventEmitter();

  ngOnInit(): void {
    setTimeout(() => {
      this.contactData.email = 'outro-email@email.com';
      this.contactData.message = 'Nova mensagem';
    }, 2000);
  }

  saveData(): void {
    this.saveDataEmitter.emit(this.contactData);
  }
}
