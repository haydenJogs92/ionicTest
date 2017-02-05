import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: './contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }


testFunctionAddition(num1, num2){
  return num1 + num2;
}

}
