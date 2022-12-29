import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
/*
we are going to pass the data from child component to parent component
=> we can pass child component data to parent component through use of Event which contains the data to be passed
=> we can pass child component data to parent component through use of @Input decorator
for example:
=>child component:
import { Component, OnInit, Output,eventEmitter } from '@angular/core';

//public childData="Hello from child";//
@Output() public childEvent=new EventEmitter();

fireEvent(){
  this.childEvent.emit('Hello from child'); //passing data to parent component
}

=>child component html:
<button (click)="fireEvent()">Send data to parent</button>

=>parent html:
<app-child2 (childEvent)="message=$event"></app-child2>
{{message}} //displaying data from child component

=>parent component:
import { Component, OnInit } from '@angular/core';

export class AppComponent implements OnInit{
  constructor() { }
  ngOnInit(): void {
  }
  title = 'reactive-form';
  message:string;
}


*/

@Output() public childData=new EventEmitter();

fireEvent(){
  this.childData.emit('Hello from child'); //passing data to parent component through event  
}
}
