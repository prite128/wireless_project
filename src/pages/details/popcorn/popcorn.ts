import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../home/home';
import { ContactPage } from '../../contact/contact';
import { InfoPage } from '../../info/info';
import { CommentPage } from '../../commenthome/home';

@Component({
  selector: 'page-popcorn',
  templateUrl: 'popcorn.html'
})
export class PopcornPage {
homePage;
contactPage;
infoPage;
commentPage;

  constructor(public navCtrl: NavController) {
this.homePage = HomePage;
this.contactPage = ContactPage;
this.infoPage = InfoPage; 
this.commentPage = CommentPage;
  }

}
