import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../home/home'
import { ContactPage } from '../../contact/contact'
import { InfoPage } from '../../info/info'
import { CommentPage } from '../../commenthome/home';

@Component({
  selector: 'page-coca_cola',
  templateUrl: 'coca_cola.html'
})
export class Coca_colaPage {
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
