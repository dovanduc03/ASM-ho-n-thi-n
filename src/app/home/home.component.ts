import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private admin:HttpClient){}
  listHome : any;
  ngOnInit():void{
    let apiUrl = 'http://localhost:3000/projects';
    this.admin.get(apiUrl).subscribe(res=>{
     this.listHome = res;
    })
   }
}