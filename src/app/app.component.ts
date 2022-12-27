import { Component } from '@angular/core';
import {FormGroup,FormControl,FormControlName,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';
}




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