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
  msg:string='';
  
}

