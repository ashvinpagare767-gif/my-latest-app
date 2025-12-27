import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from './login-form-component/login-form-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-latest-app');
}
