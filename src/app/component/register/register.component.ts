import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  loginForm!: FormGroup;
  submitted = true;
  switchCard: boolean = false;

  constructor(private formBuilder: FormBuilder, private user: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required]],    
  });
  this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],  
});
  }
  cardSwap() {
    console.log(this.switchCard);
     return this.switchCard === true ? (this.switchCard = false) : (this.switchCard = true); 
  }
  Register() { 
    this.submitted=true;
    if(this.registrationForm.valid)
    {
      console.log(this.registrationForm.value);
      let register={
        fullName:this.registrationForm.value.fullName,
        email:this.registrationForm.value.email,
        password:this.registrationForm.value.password,
        phone:this.registrationForm.value.phone,
  
     }
     this.user.registration(register).subscribe((response:any)=>{
       console.log(response)
     })
    }
    else
    {
      console.log("invalid details");
    }
  }
  Login() { 
    this.submitted=true;
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value);
      let login={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password,
     }
     this.user.login(login).subscribe((response:any)=>{
      localStorage.setItem('token',response.data.UserDetails.token)
       console.log(response);
       if(response.message == "Successfully logged in")
      {
        this.router.navigateByUrl('/dashboard/books')
      }
     })
    }
    else
    {
      console.log("invalid");
    }
  }
  
}
