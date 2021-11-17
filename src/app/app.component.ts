import { Component } from '@angular/core';
import * as PostActions from "./ngrx/post.action";
import { Post } from "./models/post.model";

import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';

interface AppState{
  post : Post
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  post! : Observable<Post>
  text! : string
  constructor(private store : Store<AppState>){
    this.post = this.store.select('post')
  }
  editText(){
    this.store.dispatch(new PostActions.EditText(this.text))
  }
  resetPost(){
    this.store.dispatch(new PostActions.Reset())
  }
  upvote(){
    this.store.dispatch(new PostActions.Upvote())
  }
  downvote(){
    this.store.dispatch(new PostActions.Downvote())
  }

}
