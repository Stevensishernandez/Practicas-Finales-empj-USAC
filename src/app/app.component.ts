import { Component } from '@angular/core';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDHAvGRB6P0tLBQf-ZB8Y-ahcpkWVZozew",
  authDomain: "practicasfinalesiot.firebaseapp.com",
  databaseURL: "https://practicasfinalesiot-default-rtdb.firebaseio.com",
  projectId: "practicasfinalesiot",
  storageBucket: "practicasfinalesiot.appspot.com",
  messagingSenderId: "82200416518",
  appId: "1:82200416518:web:cd191a6eeaca1fe4de4e87",
  measurementId: "G-L6NFFH2QS6"
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dashboard';

  constructor (){
    firebase.initializeApp(firebaseConfig);
  }
}
