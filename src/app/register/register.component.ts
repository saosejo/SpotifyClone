import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import RegisterUser from '../RegisterUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerUser: RegisterUser = {
    userName: '',
    password: '',
    password2: '',
  };

  public warning: string = "";
  public success: boolean = false;
  public loading: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registerUser.userName.length == 0) {
      this.success = false;
      this.loading = false;
      this.warning = 'Username should no be blank';
    } else if (
      this.registerUser.password == '' ||
      this.registerUser.password2 == ''
    ) {
      this.success = false;
      this.loading = false;
      this.warning = 'Password must not be empty';
    } else if (this.registerUser.password !== this.registerUser.password2) {
      this.success = false;
      this.loading = false;
      this.warning = 'Passwords do not match';
    } else {
      this.loading = true;
      this.auth.register(this.registerUser).subscribe({
        next: ()=>{
          this.success = true;
          this.warning = "";
          this.loading = false;},
        error: (e:any)=>{ 
          this.success = false;
          this.warning = e.error.message;
          this.loading = false;},
        complete: ()=>{
          this.success = true;
          this.warning = "";
          this.loading = false;}
      });
    }
  }
}