import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html'
})

export class FavoriteComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('isFavorite') isSelected: boolean;
  @Output() change = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit();
  }

}
