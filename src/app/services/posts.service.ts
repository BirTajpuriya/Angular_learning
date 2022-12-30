import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private posts:HttpClient) { }
  getPosts(){
    return this.posts.get('https://jsonplaceholder.typicode.com/posts')
  }
}
