import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { EMPTY } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  imgCat : boolean;
  imgProd : boolean;
  imgImport : boolean;
  imgSel : boolean;
  imgBrand : boolean;
  imgValor : boolean;
  imgUser : boolean;
  imgBack : boolean;
  messagesRef :any;
  temperatura: any;
  humedad: any;
  presion: any;
  cadlidadAire: any;
  Altitud: any;
  arreglo: any;
  ultimo: any=EMPTY;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.messagesRef = firebase.database().ref("Data")
    this.messagesRef.on("value", (snap) => {
      let data = snap.val();
      this.arreglo =JSON.parse(JSON.stringify(data));
      this.ultimo = this.arreglo[Object.keys(this.arreglo)[Object.keys(this.arreglo).length - 1]]
      console.log(this.ultimo);
      
    });
  }

  goCategories(){
    this.router.navigate(['./admin/categories']);
  }

  goProducts(){
    this.router.navigate(['./admin/products']);
  }

  goSelection(){
    this.router.navigate(['./admin/products/new']);
  }

  goMultimedia(){
    this.router.navigate(['./admin/multimedia']);
  }

  goUsers(){
    this.router.navigate(['./admin/users']);
  }

  goBackup(){
    this.router.navigate(['./admin/backup']);
  }

  goValue(){
    this.router.navigate(['./admin/value']);
  }

}
