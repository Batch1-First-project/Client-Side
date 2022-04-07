import { Component, OnInit } from '@angular/core';
import { UserservicesService } from '../userservices.service';
import { Reguser } from '../reguser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  

  constructor(
    private userservice: UserservicesService
  ) { }

  user =new Reguser("","","","","");

  ngOnInit(): void {
  }
  onsubmit(){
    this.userservice.enroll(this.user).subscribe(data=> console.log("success",data))
    console.log(this.user);

  }

}
