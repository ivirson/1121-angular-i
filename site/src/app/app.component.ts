import { Component, OnInit } from '@angular/core';
import { Pages } from './constants/pages.enum';
import { AppData, SectionContact } from './models/section-features.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentPage: Pages = Pages.CONTACT;

  pages = Pages;

  appData: AppData = {
    sectionFeatures: {
      title: 'Destaques dinâmico',
      feature1: {
        title: 'Destaque 1',
        image: 'feature1.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor arcu, malesuada eget posuere et.',
      },
      feature2: {
        title: 'Destaque 2',
        image: 'feature2.png',
        text: 'Aenean laoreet, felis id sollicitudin fringilla, leo orci iaculis eros, et volutpat nunc lacus ut sapien.',
      },
      feature3: {
        title: 'Destaque 3',
        image: 'feature3.png',
        text: 'Aenean non eros congue leo consectetur fermentum. Quisque ut dignissim tortor, eget porttitor magna.',
      },
      feature4: {
        title: 'Destaque 4',
        image: 'feature4.png',
        text: 'Duis id odio dapibus, finibus tortor eget, cursus nunc. Morbi egestas nisl orci, in cursus ipsum cursus et.',
      },
    },
    sectionAbout: {
      title: 'Sobre nós',
      text: `<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor arcu,
      malesuada eget posuere et, aliquam non elit. Sed maximus ullamcorper dui,
      ac sollicitudin quam molestie ac. Aenean laoreet, felis id sollicitudin
      fringilla, leo orci iaculis eros, et volutpat nunc lacus ut sapien.
      Aliquam velit justo, vestibulum et augue ut, efficitur ultrices justo.
      Aenean non eros congue leo consectetur fermentum. Quisque ut dignissim
      tortor, eget porttitor magna. Etiam sem turpis, aliquam sit amet nisi non,
      bibendum finibus neque. Duis id odio dapibus, finibus tortor eget, cursus
      nunc. Morbi egestas nisl orci, in cursus ipsum cursus et. Pellentesque in
      suscipit ipsum, vel auctor nisl. Quisque vitae vehicula velit. Integer
      dolor sapien, rutrum faucibus eros ac, hendrerit aliquet diam. Quisque non
      sem eu odio vestibulum facilisis ac aliquam tellus. Cras aliquet velit
      quis suscipit tincidunt. Phasellus ut aliquam nulla.
    </p>

    <p>
      Nam dictum diam nibh, id ultricies nunc rhoncus at. Nullam lobortis, erat
      vitae tempus semper, ante leo elementum odio, eu viverra nisi est in odio.
      Sed mi quam, ultrices vel placerat a, finibus ut neque. Curabitur eu leo
      eleifend, congue nisi et, vestibulum ex. Nulla hendrerit ex non orci
      dictum mattis. Fusce faucibus vitae massa nec fermentum. Nam tristique
      libero ac tellus vestibulum bibendum. Phasellus euismod, metus ut pretium
      vulputate, mi orci dignissim enim, id egestas augue ex in neque. Nulla ac
      dictum arcu, sit amet fringilla nisi. Duis elementum blandit nisi et
      ultrices. Morbi scelerisque auctor dui, egestas varius tellus. Sed id
      placerat felis.
    </p>`,
    },
    sectionAddress: {
      title: 'Endereço',
      text: `Sed vel libero sed enim interdum ultrices. Praesent blandit accumsan neque
      a laoreet. Sed efficitur orci sit amet risus ultrices, non volutpat lacus
      dictum. Aliquam facilisis nulla libero, a varius metus gravida a. Praesent
      faucibus imperdiet pretium. Nam eget velit in ligula dictum lacinia vel ut
      odio. Nam at elit purus. Morbi sit amet porta arcu, id gravida orci.
      Phasellus dapibus, velit vel rutrum ullamcorper, nisi urna imperdiet ex,
      quis efficitur elit massa sit amet massa. Vestibulum non luctus mauris.`,
    },
    sectionContact: {
      email: 'ivirson@email.com',
      message: 'Olá, tudo bem?',
    },
  };

  ngOnInit(): void {
    console.log(this.appData.sectionContact);
  }

  goToPage(page: Pages): void {
    this.currentPage = page;
  }

  handleSaveContactData(event: SectionContact): void {
    console.log(event);
    this.appData.sectionContact = event;
  }

  /*
    TS -> HTML - properties, objects
    HTML -> TS - events 
  */
}
