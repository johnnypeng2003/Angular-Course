import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('isLike') isActive: boolean;
  @Input('likeCount') likeCount;
  // tslint:disable-next-line:no-output-rename
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isActive = !this.isActive;
    // this.change.emit(this.isSelected);
    this.click.emit({ newValue: this.isActive });
  }
}

export interface LikeChaneEventArgs {
  newValue: boolean;
}
