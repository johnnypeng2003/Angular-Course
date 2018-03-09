import { LikeComponent } from "./Like.component";

let component = new LikeComponent(10, true);

component.onClick();

console.log(`Likes count： ${component.likesCount}, Is selected: ${component.isSelected}`);
