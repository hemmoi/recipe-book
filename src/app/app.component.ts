import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  toolbarElement = 'recipes';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCv11zeja9jIrCaeckix7PfLY0-dfTtETo',
      authDomain: 'ng-recipe-book-f01df.firebaseapp.com',
    });
  }

  onToolbarSelect(feature: string) {
    this.toolbarElement = feature;
  }
}
