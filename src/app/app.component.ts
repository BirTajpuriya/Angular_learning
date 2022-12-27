import { Component } from '@angular/core';
import {FormGroup,FormControl,FormControlName,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';
  loginform=new FormGroup({
    username:new FormControl('',[Validators.required]), //this are validations
    email:new FormControl('',[Validators.required,Validators.minLength(5)])
  })

  
  show_result(){
    console.log(this.loginform.value);
  }


  // to display error in span tag
  get username(){
    return this.loginform.get('username')
  }

  get email(){
    return this.loginform.get('email')
  }

}



/*
********************Reactive form with Validations**************************************
1. first of all,import Validators in app.component.ts file
import {FormGroup,FormControl,Validators} from '@angular/forms'

2. In the FormControl field,
=> Add a parameter for validation
for example:

loginform=new FormGroup({
  username=new FormControl('',[Validators.required]),
  email=new FormControl('',[Validators.required,Validators.minLength(5)])
})

*********************to display Error near input filed 
we need to make a specific function to check input field value.
 for example to check the value for uername input field

 get user(){
  return this.formName.get('FormControlname');
 }


 // similar to show error using span tag, do following

 <span style="color:red" *ngIf="user && user.invalid && user.touched">The field is not valid</span>      //here user is the function name =>get user() 
*/ 





/* *****************************************Angular Directives************************

=> Main objectives: to add additional behavior to elements.
=>Directives are the classes that add additional behavior to elements in angular application
=>Use angular built in directives to manage forms,lists,styles and what user see.

=> whatever a user see, can be change or manipulated using directives.
=>1.component is also directives that is used with template.

=>2. Attribute directives
=>like classes and styles
=>changes the appearance and behavior of elements, components or another directives.
=>
*************************Built in attribute directives
=>ngClass, ngModel, ngStyle


=>3.Strucutural directives
=>changing the DOM layout by adding and removing the DOM elements.
Built in structural directives
=>ngIf,ngFor,ngSwitch


*/