import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private posts: HttpClient) { }
  getData(): Observable<any> {
    return this.posts.get('https://jsonplaceholder.typicode.com/posts');
  }
}
