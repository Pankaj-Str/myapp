import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-enq',
  standalone: true,
  imports: [],
  templateUrl: './enq.component.html',
  styleUrl: './enq.component.css'
})
export class EnqComponent {


  info(){
    alert("welcome to home")
    
  }
  
  username = "admin"
  password = "password"


}
