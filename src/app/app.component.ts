import { Component } from '@angular/core';
import { FavoriteChaneEventArgs } from './favorite/favorite.component';
import { LikeChaneEventArgs } from './like/like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavoriteX: true
  };
  tweet = {
    body: 'Here is the body of tweet...',
    isLike: false,
    likeCount: 0
  };

  onFavoriteChange(eventArgs: FavoriteChaneEventArgs) {
    console.log('isFavorite changed： ', eventArgs);
  }

  onLikeChange(eventArgs: LikeChaneEventArgs) {
    this.tweet.likeCount = (eventArgs.newValue) ? 1 : 0;
  }
}
