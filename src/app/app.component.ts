import { Component } from '@angular/core';
import {FormGroup,FormControl,FormControlName,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'reactive-form';
  Myname:any='';
}
/* *********************Two way Binding****************************
=> Defination: In the same time user able to see write and see the result.
Steps:
=> import FormsModule in app.module.ts
=>in the input tag use [(ngModel)]="valueName"
=>in ts file declare or define the value(valueName).
=> in template, use interpolation {{valueName}} to display the input.

*/
