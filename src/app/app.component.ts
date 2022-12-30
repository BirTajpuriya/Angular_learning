import { Component, OnInit } from '@angular/core';
import { PostsService} from './services/posts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title:any='';
  constructor(private posts:PostsService) { }
  ngOnInit(){
    this.posts.getPosts().subscribe((data)=>{
      console.log(data)
      this.title=data;
    })
  }
  
}

/* *********************************For Calling API********************************* 
=> First of make a new project using ng new projectname
=>Make a new service using ng g s services/serviceName
=>Import the HttpClientModule in app.module.ts
=>Inside the service import the HttpClient
=>Inside the constructor of the service import the HttpClient
=>Inside the service make a function which will call the API
for example: 

=>app.module.ts
import {HttpClientModule} from '@angular/common/http'
imports:[HttpClientModule]
=>service.ts
import {HttpClient} from '@angular/common/http'
constructor(private posts:HttpClient) {}
getPosts(){
  return this.posts.get('https://jsonplaceholder.typicode.com/posts')
}

=>Inside the component import the service
=>Inside the constructor of the component import the service
=>Inside the ngOnInit() of the component call the function of the service
for example:
=>component.ts
import { PostsService} from './services/posts.service';
constructor(private posts:PostsService) { }
ngOnInit(){
  this.posts.getPosts().subscribe((data)=>{
    console.log(data)
    this.title=data;
  })
} 

=>Inside html or template
for example:
=>app.component.html
{{title | json}}

*/

