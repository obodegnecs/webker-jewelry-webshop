import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { user, User } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  /*user_id: string = '';

  updateProfile = new FormGroup({
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

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  onSubmit() {

  }*/

}
