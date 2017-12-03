import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showpage',
  templateUrl: 'showpage.html',
})
export class ShowpagePage {

  myInfo = {
    key : '',
    firstName : '',
    lastName : '',
    country : '',
    city : '' , 
    phone : '' , 
    salary : '' , 
    email : '' 
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.myInfo.key = this.navParams.get('key')
    this.myInfo.firstName = this.navParams.get('firstName')
    this.myInfo.lastName = this.navParams.get('lastName')
    this.myInfo.country = this.navParams.get('country')
    this.myInfo.city = this.navParams.get('city')
    this.myInfo.phone = this.navParams.get('phone')
    this.myInfo.salary = this.navParams.get('salary')
    this.myInfo.email = this.navParams.get('email')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowpagePage');
  }

}
