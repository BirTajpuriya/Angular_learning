import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormControlName,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'reactive-form';
  Myname:any='';

  name:string='Clean Code';
  author:string='Robert C Martin';
  src:string='https://source.unsplash.com/random/150x150/?nature';

  name2:string='Pragmatic Programmer';
  author2:string='David Thomas';
  src2:string='https://source.unsplash.com/random/150x150/?user,computer,programming'

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
