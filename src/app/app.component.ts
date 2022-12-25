import { Component } from '@angular/core';
import {FormGroup,FormControl,FormControlName} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';
  loginform=new FormGroup({
    username:new FormControl(''),
    email:new FormControl('')
  })

  // function to display results
  // input:any
  show_result(){
    // let input=this.loginform.value;
    console.log(this.loginform.value);
    
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

*/
