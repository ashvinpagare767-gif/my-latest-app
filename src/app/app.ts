import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list-component/user-list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-latest-app');
}
