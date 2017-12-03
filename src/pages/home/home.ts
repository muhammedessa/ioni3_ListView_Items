import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase ,AngularFireList ,AngularFireAction } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import firebase from 'firebase';

import { ShowpagePage } from '../showpage/showpage';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
  itemsRef: AngularFireList<any>;
  employees: Observable<any[]>;
  
  
  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>; //added
  size$: BehaviorSubject<string|null>;//added
  
  constructor(public navCtrl: NavController, af: AngularFireDatabase  ) {
   
    this.itemsRef =  af.list('/employees/employees')
     this.employees = this.itemsRef.valueChanges() ;
  
    
  //added
     this.size$ = new BehaviorSubject(null); //added
     this.items$ = this.size$.switchMap(size =>  //added
       af.list('/employees/employees', ref =>  //added
         size ? ref.orderByChild('size').equalTo(size) : ref  //added
       ).snapshotChanges() //added
     );
   
     this.items$.subscribe(actions => {
      actions.forEach(action => {
        console.log(action.type);
        console.log(action.key);
        console.log(action.payload.val());
      })  ; 
   
    });
  }
      
  
   
  itemSelected(key, firstName, lastName, country, city, phone, salary, email){
    // console.log(key, firstName, lastName, country, city, phone, salary, email);
    this.navCtrl.push(ShowpagePage,{
      key : key,
      firstName : firstName,
      lastName : lastName,
      country : country,
      city : city , 
      phone : phone , 
      salary : salary , 
      email : email 
          });
   }

 




}
