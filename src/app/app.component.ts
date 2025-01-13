import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User, UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'essentials';
  users = DUMMY_USERS;
  selectedUser?: User;

  onUserSelected(selectedUser: User) {
    this.selectedUser = selectedUser;
  }
}
