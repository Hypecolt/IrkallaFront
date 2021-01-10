import { Component, Input, OnInit, Output, EventEmitter, OnChanges, DoCheck, SimpleChange, SimpleChanges, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';
import { Persoana } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit, 
                                      OnChanges, 
                                      DoCheck, 
                                      AfterContentInit, 
                                      AfterContentChecked,
                                      OnDestroy {
  @Input() persoana!:Persoana;
  @Input() nume!:string;
  @Output() deleteEvent:EventEmitter<any> = new EventEmitter<any>();
  @Output() event:EventEmitter<any> = new EventEmitter<any>();
  date=new Date().toISOString();

  constructor() { 
    console.log("contactu");
  }

  ngOnInit(): void {
    console.log("ngOnInit call");
  }

  ngOnChanges(simpleChanges:SimpleChanges):void{
    console.log(simpleChanges);
    console.log("changes call");
  }

  ngDoCheck():void{
    console.log("check call");
  }

  ngAfterContentInit():void{
    console.log("content init");
  }

  ngAfterContentChecked():void{
    console.log("content check");
  }

  ngOnDestroy():void{
    console.log("destoy");
  }

  delete(){
    this.deleteEvent.emit();
  }

  schimbaNume(){
    this.event.emit();
  }

}
