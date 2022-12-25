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
    username:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.minLength(5)])
  })

  
  show_result(){
    console.log(this.loginform.value);
  }

  get username(){
    return this.loginform.get('username')
  }

  get email(){
    return this.loginform.get('email')
  }

}



// ********************reactive from guidelines*****************
/*   
1. firstly create a new project
2. import ReactiveFormsModule in app.module.ts
3.Go to,app.component.ts
    & import FormGroup, FormControl,FormControlName
4. Now make a FormGroup in app.component.ts file
    Note: FormGroup is for controlling the whole form. It represents to form

5. Inside FormGroup, in order to control the input field, we need to make a FormControl.

//Example for No.4 & 5
 loginform=new FormGroup({       // No.4 ans & below all refers to no.5 ans
  username:new FormControl(),
  email:new FormControl(),
  password:new FormControl()
 })


 Here inside the loginform FormGroup,- username,email & password are the
name for input type field which is also known as FormControlName in Angular.

=>We need to write FormControlName for each input field in order to access the 
input value by the user.
for example:

Name:
<input type="text" name="name" FormControlName="username">
Email:
<input type="email" name="email" FormControlName="email"/>
Password:
<input type="password" name="psw" FormControlName="password"/>

after this all, go to html(template) file and 
=> Inside <form> tag write [FormGroup]="anyname" // FormGroup is fixed but 
in the place of anyname,you can write any name mention in .ts file.

=> Generally we perform certain event on form data submit.
In order to do so, we need to mention inside the <form> tag (ngSubmit)="method_name()"

*/



/*
********************Reactive form with Validations
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
