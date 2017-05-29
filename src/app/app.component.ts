import { Component } from '@angular/core';
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;
  title = 'app works!';

  constructor(private service: LoginService) {
    this.user = this.service.getCurrentUser();
  }

  logout() {
    this.service.logout();
  }

}
