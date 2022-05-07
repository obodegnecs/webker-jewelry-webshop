import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    }),
    email: new FormControl(''),
    password: new FormControl(''),
    passwordagain: new FormControl(''),
    address: new FormGroup({
      postcode: new FormControl(''),
      city: new FormControl(''),
      street: new FormControl('')
    })
  })

  constructor(private location: Location, private authService: AuthService, private userService: UserService) { 
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.authService.singup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then(cred => {
      console.log(cred);
      const user: User = {
        id: cred.user?.uid as string,
        email: this.signUpForm.get('email')?.value,
        name: {
          firstname: this.signUpForm.get('name.lastname')?.value,
          lastname: this.signUpForm.get('name.lastname')?.value
        },
        address: {
          postcode: this.signUpForm.get('address.postcode')?.value,
          city: this.signUpForm.get('address.city')?.value,
          street: this.signUpForm.get('address.street')?.value
        }
      };
      this.userService.create(user).then(_ => {
        console.log('New user!');
      }).catch(error => {
        console.error(error);
      });
    }).catch(error => {
      console.error(error);
    });
  }

  back() {
    this.location.back();
  }

}
