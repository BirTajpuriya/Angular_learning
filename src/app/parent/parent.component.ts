import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
  }
  addedProduct:any; // add to cart button

  productSelected:boolean=false;
product_name:string='';
  onSelected(product:any){
    this.productSelected=true;
    this.product_name=product; // product selected
  }

  // after clicking add to cart button
  onAddProduct(){
this.addedProduct=this.product_name;
  }

// input field placeholder
mytext='Enter any text';
}
