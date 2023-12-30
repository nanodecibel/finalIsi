import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finalIsi';
  isLoggedIn: boolean = false;
  username: string = 'Carlos';
  password: string = '1234';

  login() {
    
    if (this.username !== '' && this.password !== '') {
      this.isLoggedIn = true;
      console.log("Ingreso exitoso")
    }
    else{
      console.log("Error")
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.username = '';
    this.password = '';
  }
}
