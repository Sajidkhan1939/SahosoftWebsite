import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup, FormControl} from '@angular/forms';
import {EmployerserviceService} from '../employerservice.service';
import { Employee } from '../employee';
import {Router} from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  RegForm !:  FormGroup
  message: any

  constructor(private formbuilder:FormBuilder, private router:Router) {
    
    this.RegForm=formbuilder.group({
      FirstName:['',[Validators.required]],
      LastName:['',[Validators.required]],
      EmailId:['',[Validators.required]],
      Password:['',[Validators.required]],
    
    });
  }

  ngOnInit(): void {
  }
  submitform(RegForm:any){
   
    console.log(this.RegForm.value);
    alert("successfully Registered");
    
  }
   
   savedata(){
    sessionStorage.setItem(this.RegForm.value.FirstName,this.RegForm.value.FirstName)
    sessionStorage.setItem(this.RegForm.value.LastName,this.RegForm.value.LastName) 
    sessionStorage.setItem(this.RegForm.value.EmailId,this.RegForm.value.EmailId) 
    sessionStorage.setItem(this.RegForm.value.Password,this.RegForm.value.Password)  

   }

}


