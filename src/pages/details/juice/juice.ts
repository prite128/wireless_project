import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../home/home';
import { ContactPage } from '../../contact/contact';
import { InfoPage } from '../../info/info';
import { CommentPage } from '../../commenthome/home';

@Component({
  selector: 'page-juice',
  templateUrl: 'juice.html'
})
export class JuicePage {
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
