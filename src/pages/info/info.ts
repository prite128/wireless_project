import { Component } from '@angular/core';

import { NavController,ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { CommentPage } from '../commenthome/home';

import { CakePage} from '../details/cake/cake'
import { DonutPage} from '../details/donut/donut'
import { FrenchfryPage} from '../details/frenchfry/frenchfry'
import { Fried_ricePage} from '../details/fried_rice/fried_rice'
import { HamburgerPage} from '../details/hamburger/hamburger'
import { Ice_creamPage} from '../details/ice_cream/ice_cream'
import { PizzaPage} from '../details/pizza/pizza'
import { PopcornPage} from '../details/popcorn/popcorn'
import { RamenPage} from '../details/ramen/ramen'
import { Chicken_saladPage} from '../details/chicken_salad/chicken_salad'
import { SpaghettiPage} from '../details/spaghetti/spaghetti'
import { SteakPage} from '../details/steak/steak'
import { Chicken_nuggetsPage} from '../details/chicken_nuggets/chicken_nuggets'
import { BeerPage} from '../details/beer/beer'
import { Coca_colaPage} from '../details/coca_cola/coca_cola'
import { CoffeePage} from '../details/coffee/coffee'
import { JuicePage} from '../details/juice/juice'

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'

})

export class InfoPage {
homePage;
contactPage;
infoPage;
commentPage;
cakePage;
donutPage;
frenchfryPage;
fried_ricePage;
hamburgerPage;
ice_creamPage;
pizzaPage;
popcornPage;
ramenPage;
chicken_saladPage;
spaghettiPage;
steakPage;
chicken_nuggetsPage;
beerPage;
coca_colaPage;
coffeePage;
juicePage;

 constructor(public altCtrl: AlertController, public navCtrl: NavController,private modalCtrl: ModalController) { 
this.homePage = HomePage; 
this.contactPage = ContactPage;
this.infoPage = InfoPage;
this.commentPage = CommentPage;
this.cakePage = CakePage;
this.donutPage = DonutPage ;
this.frenchfryPage = FrenchfryPage;
this.fried_ricePage = Fried_ricePage;
this.hamburgerPage = HamburgerPage;
this.ice_creamPage = Ice_creamPage;
this.pizzaPage = PizzaPage;
this.popcornPage = PopcornPage;
this.ramenPage = RamenPage;
this.chicken_saladPage = Chicken_saladPage;
this.spaghettiPage = SpaghettiPage;
this.steakPage = SteakPage;
this.chicken_nuggetsPage = Chicken_nuggetsPage;
this.beerPage = BeerPage;
this.coca_colaPage = Coca_colaPage;
this.coffeePage = CoffeePage;
this.juicePage = JuicePage;
 }
 //goToInfo(){this.navCtrl.push(HomePage)}


gocommenthome(birthday) {
        let modal = this.modalCtrl.create(CommentPage , { birthday: birthday });
        modal.present();
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

  //openMenuDetails(){
    //this.navCtrl.push(DetailsPage)
  }*/
 
}


 




