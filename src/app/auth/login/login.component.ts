import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 LoginForm !:  FormGroup
  constructor(private formbuilder:FormBuilder, private router:Router ) {
    this.LoginForm=formbuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    });
   }

  ngOnInit(): void {
    console.log(this.LoginForm);
  }
  PostData(LoginForm:any){
    console.log(this.LoginForm.value);
    alert("succesfully login");

  }
  userdata(){
    sessionStorage.setItem(this.LoginForm.value.username,this.LoginForm.value.username)
    sessionStorage.setItem(this.LoginForm.value.password,this.LoginForm.value.Password) 
  }
  routeconfig(){
    this.router.navigate(['/logout']);
   
  }
  
}
