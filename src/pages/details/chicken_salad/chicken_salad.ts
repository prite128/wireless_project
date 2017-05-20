import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../home/home'
import { ContactPage } from '../../contact/contact'
import { InfoPage } from '../../info/info'
@Component({
  selector: 'page-chicken_salad',
  templateUrl: 'chicken_salad.html'
})
export class Chicken_saladPage {
homePage;
contactPage;
infoPage;
  constructor(public navCtrl: NavController) {
this.homePage = HomePage;
this.contactPage = ContactPage;
this.infoPage = InfoPage; 
  }

}
