import { Component } from '@angular/core';

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

  onFavoriteChange() {
    console.log('isFavorite changed.');
  }
}
