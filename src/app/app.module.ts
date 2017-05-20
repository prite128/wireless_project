import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { InfoPage } from '../pages/info/info';
import { ContactPage } from '../pages/contact/contact';
import { CakePage} from '../pages/details/cake/cake'
import { DonutPage} from '../pages/details/donut/donut'
import { FrenchfryPage} from '../pages/details/frenchfry/frenchfry'
import { Fried_ricePage} from '../pages/details/fried_rice/fried_rice'
import { HamburgerPage} from '../pages/details/hamburger/hamburger'
import { Ice_creamPage} from '../pages/details/ice_cream/ice_cream'
import { PizzaPage} from '../pages/details/pizza/pizza'
import { PopcornPage} from '../pages/details/popcorn/popcorn'
import { RamenPage} from '../pages/details/ramen/ramen'
import { Chicken_saladPage} from '../pages/details/chicken_salad/chicken_salad'
import { SpaghettiPage} from '../pages/details/spaghetti/spaghetti'
import { SteakPage} from '../pages/details/steak/steak'
import { Chicken_nuggetsPage} from '../pages/details/chicken_nuggets/chicken_nuggets'
import { BeerPage} from '../pages/details/beer/beer'
import { Coca_colaPage} from '../pages/details/coca_cola/coca_cola'
import { CoffeePage} from '../pages/details/coffee/coffee'
import { JuicePage} from '../pages/details/juice/juice'
//import { CommentPage } from '../pages/comment/comment';
//import { BirthdayService } from '../birthday.service/birthday.service'; 
//import { DetailsPage } from '../pages/details/details';  
import { CommentPage } from '../pages/commenthome/home';
import { DetailsPage } from '../pages/commentdetails/details';
import { BirthdayService } from '../services/birthday.service';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
    ContactPage,
    CakePage,
    DonutPage,
    FrenchfryPage,
    Fried_ricePage,
    HamburgerPage,
    Ice_creamPage,
    PizzaPage,
    PopcornPage,
    RamenPage,
    Chicken_saladPage,
    SpaghettiPage,
    SteakPage,
    Chicken_nuggetsPage,
    BeerPage,
    Coca_colaPage,
    CoffeePage,
    JuicePage,
    CommentPage,
     DetailsPage
    //CommentPage,
    //DetailsPage,
    //BirthdayService
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoPage,
    ContactPage,
    CakePage,
    DonutPage,
    FrenchfryPage,
    Fried_ricePage,
    HamburgerPage,
    Ice_creamPage,
    PizzaPage,
    PopcornPage,
    RamenPage,
    Chicken_saladPage,
    SpaghettiPage,
    SteakPage,
    Chicken_nuggetsPage,
    BeerPage,
    Coca_colaPage,
    CoffeePage,
    JuicePage,
    CommentPage,
     DetailsPage
    //CommentPage,
    //DetailsPage,
   // BirthdayService
  ],
  providers: [
   
    {provide: ErrorHandler, useClass: IonicErrorHandler}
     ,BirthdayService
  ]
  
})
export class AppModule {}