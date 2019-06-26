import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { User } from '../models/user.model';
import { AuthenticatorService } from 'src/app/service/authenticator.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup

  constructor(private fb: FormBuilder, private authService:AuthenticatorService) {
    this.registerForm = this.fb.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    }
    )
  }

  ngOnInit() {
  }

  submit(){
    let user:User = {
      "id":null,
      "name":this.registerForm.controls.name.value,
      "email":this.registerForm.controls.email.value,
      "password":this.registerForm.controls.password.value,
      "meusJogos":[]
    }
    
    this.authService.registrar(user);
  }

}
