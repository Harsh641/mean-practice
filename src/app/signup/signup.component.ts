import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User = {id:0, first_name:"", last_name:"", email:"", password:"", gender:"", picurl:""}
  constructor(private sessionService: SessionService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  addUser(){
    this.sessionService.saveUser(this.user).subscribe(resp=>{
      this.toastr.success("User Added", "", {timeOut:3000})
      this.router.navigateByUrl("/login")
    })
  }
}
