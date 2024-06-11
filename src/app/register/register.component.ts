import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(
    private auth:AuthService,
    private router:Router
  ) {}

  onSubmit = (data: any) => {
    //gọi hàm register ở trong authService
    this.auth.register(data).subscribe(res => {
      alert('Đăng ký thành công');
      this.router.navigate(['login']);
    }, error => {
      alert(error.error);
    })
  }
}
