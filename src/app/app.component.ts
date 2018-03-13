import { Component } from '@angular/core';
import { FavoriteChaneEventArgs } from './favorite/favorite.component';

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

  onFavoriteChange(eventArgs: FavoriteChaneEventArgs) {
    console.log('isFavorite changed： ', eventArgs);
  }
}
