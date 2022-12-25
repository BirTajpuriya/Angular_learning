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
    username:new FormControl('bir'),
    email:new FormControl('abc@gmail.com')
  })

  // function to display results
  // input:any
  show_result(){
    // let input=this.loginform.value;
    console.log(this.loginform.value);
    
  }
}
