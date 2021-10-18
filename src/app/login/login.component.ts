import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShortenerService } from '../shortener.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup
  constructor(private userService:ShortenerService, private router:Router, private fb:FormBuilder) {
    this.userForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required])
    })
  }


  ngOnInit(): void {
  }

  check(){
    this.userService.getAllUser().subscribe((data) => {
      data.forEach(element => {
        if(element.email==this.userForm.controls.email.value){
          this.userService.getUserByID(element.id).subscribe((data2) => {
            if(data2.password==this.userForm.controls.password.value){
              console.log("YES")
              this.router.navigate(['/dashboard', data2.id])
            }
            else{
              console.log("NO")
            }
          })
        }
      });
    })
  }

}