import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = ""
  password:string = ""
  constructor(private sessionService:SessionService, private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.sessionService.authenticate(this.email, this.password).subscribe(resp=>{
      this.toastr.success("Logged In", "", {timeOut:3000})
      this.router.navigateByUrl("/home")
    },err=>{
      this.toastr.error("Invalid Credentials", "", {timeOut:3000})
    })
  }
}
