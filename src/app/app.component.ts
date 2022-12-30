import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API-call';
  /**
   *
   */
  result: any;
  constructor(private post: PostsService) {
    this.post.getData().subscribe((data) => {
      console.log(data);
      this.result = data;

    })

  }
}
