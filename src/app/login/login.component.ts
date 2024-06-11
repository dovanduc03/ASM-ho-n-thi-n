import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private auth:AuthService,
    private router:Router
  ) {}

  onSubmit = (data: any) => {
    //gọi vào hàm login trong authService
    this.auth.login(data).subscribe(res => {
      const token = res?.accessToken;
      const email = res?.user.email;
      const info = {token:token,email:email};
    
      //lưu info vào trong localStorage
      localStorage.setItem('user', JSON.stringify(info));
      this.router.navigate(['list']);
    }, error => {
      alert(error.error);
    })
  }
}
