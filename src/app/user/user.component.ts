import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) name: string = '';
  @Input({ required: true }) avatar: string = '';

  get imgPath() {
    return `assets/users/${this.avatar}`;
  }
}
