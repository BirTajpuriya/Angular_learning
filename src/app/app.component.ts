import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormControlName,Validators} from '@angular/forms'


// defining the properties
interface Book{
  name:string;
  author:string;
  src:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'reactive-form';
  Myname:any='';
/*
   name:string='Clean Code';
   author:string='Robert C Martin';
   src:string='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/518z5dvykPL._SX348_BO1,204,203,200_.jpg';

   name2:string='Pragmatic Programmer';
   author2:string='David Thomas';
   src2:string='https://source.unsplash.com/random/150x150/?user,computer,programming'

  */

  /* We also can show the books by the use of *ngFor
  => we first make a properties(object types) with key value pair.
  =>look like json format
  =>array of objec types

  => After making array properties, define the properties using the interface
  */

  books:Book[]=[{
  name:'Clean Code',
  author:'Robert C Martin',
  src:'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/518z5dvykPL._SX348_BO1,204,203,200_.jpg'
  },
  {
    name:'Pragmatic Programmer',
    author:'David Thomas',
    src:'https://source.unsplash.com/random/150x150/?user,computer,programming'
  }
]


  // 
  // isDisabled:boolean=false;

  //for *ngIf
  //first make false & after click on button display
  isShowing:boolean=false;
  constructor(){}

  ngOnInit(): void {
      
  }

  /*
  //isDisabled Button
  handleClick(){
    this.isDisabled=true;
  }
*/

  //two way binding for variable
  myName:string='';

  // *ngfor
  // after button clicks display the books
  toggleBooks(){
    // this.isShowing=true;
    // or can be wriiten following
    this.isShowing=!this.isShowing;

  /*
  this.isShowing=!this.isShowing;

  // this means if isShowing is true, then make it false
  // or isShowing is false, then make it true
  */ 
  }
}
