import { Component } from '@angular/core';

import { NavController,ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


import { InfoPage } from '../info/info';
import { ContactPage } from '../contact/contact';
import { CommentPage } from '../commenthome/home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})

export class HomePage {
infoPage;
contactPage;
homePage;
commentPage;
  constructor(public altCtrl: AlertController, public navCtrl: NavController, private modalCtrl: ModalController) { 
this.infoPage = InfoPage; 
this.contactPage = ContactPage;
this.homePage = HomePage; 
this.commentPage = CommentPage; 

  }

//goToInfo(){this.navCtrl.push(InfoPage)}

gocommenthome(birthday) {
        let modal = this.modalCtrl.create(CommentPage , { birthday: birthday });
        modal.present();
    }

}
  












