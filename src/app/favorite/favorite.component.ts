import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styles: [
    `
      .glyphicon {
        color: blue;
      }
    `
  ],
  styleUrls: ['./favorite.Component.css']
})

export class FavoriteComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('isFavorite') isSelected: boolean;
  // tslint:disable-next-line:no-output-rename
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    // this.change.emit(this.isSelected);
    this.click.emit({ newValue: this.isSelected });
  }
}

export interface FavoriteChaneEventArgs {
  newValue: boolean;
}
