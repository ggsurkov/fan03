import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login({ username: this.username, password: this.password }).subscribe(
      (res) => {
        // Сохранение токена и редирект
      },
      (err) => {
        // Обработка ошибок
      },
    );
  }
}
