import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() myData:string='';
  // above code means
  //jaha hami input decorator used garxeu, teha tesle value parent component ma khojxa ra value receive garxa
  //we have used Input decorator to get the data from parent component
  //myData is the variable which is used to store the data from parent component
  //we have used string type because we are passing string type data from parent component


  //aba hamile child component ma data used garna sakxeu.


  //3. to access the array from parent component
  @Input() myDataArray:string[]=[];

  //4. to access the object from parent component
  @Input() myDataObject:any={};
}
