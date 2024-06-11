import { Component } from '@angular/core'; //nhúng thư viện
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router'; //nhúng thư viện

@Component({
  selector: 'app-root', //meta-data
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//export class tenComponent
export class AppComponent {
  

  logout(): void {
    const user = localStorage.getItem('user');
    if (user !== null) {
      localStorage.removeItem('user');
    }
  }
}
