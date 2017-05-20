import { Component, NgZone } from "@angular/core";
import { ModalController, NavController, Platform } from 'ionic-angular';  
import { BirthdayService } from '../../services/birthday.service';  
import { DetailsPage } from '../commentdetails/details';  
import { AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { InfoPage } from '../info/info';
import { ContactPage } from '../contact/contact';
//import { CommentPage } from '../commenthome/home';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class CommentPage {  
infoPage;
contactPage;
homePage;
commentPage;

    public birthdays = [];

    constructor(private birthdayService: BirthdayService,
        private nav: NavController,
        private platform: Platform,
        private zone: NgZone,
        private modalCtrl: ModalController,
        public alertCtrl: AlertController) {
          this.infoPage = InfoPage; 
          this.contactPage = ContactPage;
          this.homePage = HomePage; 
          this.commentPage = CommentPage; 
    }

    gocommenthome(birthday) {
        let modal = this.modalCtrl.create(CommentPage , { birthday: birthday });
        modal.present();
    }

    ionViewDidLoad() {
        this.platform.ready().then(() => {
            this.birthdayService.initDB();

            this.birthdayService.getAll()
                .then(data => {
                    this.zone.run(() => {
                        this.birthdays = data;
                    });
                })
                .catch(console.error.bind(console));
        });
    }

    showDetail(birthday) {
        let modal = this.modalCtrl.create(DetailsPage, { birthday: birthday });
        modal.present();
    }

    //constructor(public alertCtrl: AlertController) {}

     public tap: number = 0;
     public press: number = 0;
     
  pressEvent(e) {
    this.press++
  }
 
  tapEvent(e) {
    this.tap++
  }

  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Comments',
      message: "Enter your comments",
      inputs: [
        {
          name: 'Enter your comments',
          placeholder: 'Enter your comments'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });

    
    prompt.present();

    
 
     }

}



       