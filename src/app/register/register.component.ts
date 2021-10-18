import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShortenerService } from '../shortener.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup
  constructor(private userService:ShortenerService, private router:Router) {
    this.userForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required]),
      'confirm': new FormControl('', [Validators.required]),
      'dob': new FormControl('', [Validators.required])
    })
  }


  ngOnInit(): void {
  }

  valid(){
    if(this.userForm.controls.confirm.value==this.userForm.controls.password.value){
      return true
    }
    else{
      return false
    }
  }

  submitUser(){
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.userService.saveUser(this.userForm.value).subscribe(() => {
        this.router.navigate(['/login'])
      },() => {
        alert("Something Went Wrong")
      })
    }
  }

}
