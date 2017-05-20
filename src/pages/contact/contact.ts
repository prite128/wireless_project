import { Component } from '@angular/core';

import { NavController,ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


import { HomePage } from '../home/home';
import { InfoPage } from '../info/info';
import { CommentPage } from '../commenthome/home';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'

})

export class ContactPage {
  
  homePage;
  infoPage;
  contactPage;
  commentPage;
  
constructor(public altCtrl: AlertController, public navCtrl: NavController, private modalCtrl: ModalController) { 
  
  this.homePage = HomePage; 
  this.infoPage = InfoPage; 
  this.contactPage = ContactPage;
  this.commentPage = CommentPage; 

 
  }

  gocommenthome(birthday) {
        let modal = this.modalCtrl.create(CommentPage , { birthday: birthday });
        modal.present();
    }
}

  /*doAlert() {
    let alert = this.altCtrl.create({
      title: 'Welcome',
      message: 'You can find your menu',
      buttons: ['OK']
    });
    alert.present()
  }
  openMenuHome(){
    this.navCtrl.push(HomePage)
  }

  openMenuInfo(){
    this.navCtrl.push(InfoPage)
  }

  openMenuContact(){
    this.navCtrl.push(ContactPage)
  }

  openMenuDetails(){
   this.navCtrl.push(DetailsPage)
  }
 
}*/
