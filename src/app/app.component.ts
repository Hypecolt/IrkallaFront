import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{

  buttonDisabled = false;
  imgLink ="https://i.pinimg.com/originals/58/f4/0e/58f40eac70b39cce2a9ea043bd0f5278.jpg"

  persoane:Persoana[] = [
    new Persoana("ionel", 40, 1.71, this.imgLink)
  ]

  nume!:string;
  varsta!:number;
  inaltime!:number;
  linkProfilePicture!:string;

  numePP!:string;

  ngOnInit(){
    this.numePP = this.persoane[0].nume;
  }

  delete():void{
    console.log("ionel e sters");
  }
  
  deleteCard(index:number){
      console.log("tactu e sters");
      this.persoane.splice(index, 1);
  }

  adaugaPersoana(){
    console.log(this.nume + " " + this.varsta + " " + this.inaltime + " " + this.linkProfilePicture);
    this.persoane.push(new Persoana(this.nume, this.varsta, this.inaltime, this.linkProfilePicture));
  }

  varstaChanged(age:number){
    this.varsta = age;
    console.log("paul schimba varsta la "+ this.varsta);
  }

  eventEmis(){
    this.numePP = 'paul';
  }

}

export class Persoana{
  nume:string;
  varsta:number;
  inaltime:number;
  linkProfilePicture:string;

  constructor(nume:string, varsta:number, inaltime:number, linkProfilePicture:string){
    this.nume = nume;
    this.varsta = varsta;
    this.inaltime = inaltime;
    this.linkProfilePicture = linkProfilePicture;
  }

}