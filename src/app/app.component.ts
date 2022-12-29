import { Component, OnInit } from '@angular/core';


// defining the properties

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor() { }
  ngOnInit(): void {
  }
  title = 'reactive-form';
  valueTopass="Hello from parent";
  
}

/*
***************************Component communication in angular********************************
=> Parent to child communication
=> Child to parent communication
=> Sibling to sibling communication
=> Parent to sibling communication
=> Child to sibling communication
=> Sibling to parent communication
=> Child to child communication
=> Parent to parent communication


=>1.Communication between the related components
parent component -> child component
parent component <- child component

=>2.Communication between the unrelated components
Component ->Services <- Component


*****************************Important points to remember*************************************
* Component Communication in Angular

    *via Parent to Child 
          =>( @Input )
    *via Child to Parent
          =>ViewChild
          =>@Output / Event Emitter
    * Between different components
          =>via Services
*/
