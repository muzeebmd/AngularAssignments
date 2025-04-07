import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Simple-form';
  // Properties for data binding
  userName: string = '';
  userCity: string = '';
  userEmail: string = '';

  // Method to handle button click event
  updateUser() {
    alert(`User Updated: ${this.userName}, ${this.userCity}, ${this.userEmail}`);
  }
}
