import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, ObservableNotification, Subscription } from 'rxjs';
import { FakeLoadingService } from 'src/app/shared/services/fake-loading.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;

  loading: boolean = false;

  constructor(private router: Router, private loadingService: FakeLoadingService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    /*this.loadingService.loadingWithPromise(this.email.value, this.password.value).then((_: boolean) => {
      this.router.navigateByUrl('/main');
    }).catch(error => {
      console.error(error, 'Incorrect email or password!');
    }).finally(() => {
      console.log('This is executed finally');
    });*/

    //Observable memory leak
    /*this.loadingObservation = this.loadingService.loadingWithObservable(this.email.value, this.password.value);
    this.loadingSubscription = this.loadingObservation.subscribe((data: boolean) => {
      console.log(data);
      this.router.navigateByUrl('/main');
    }, error => {
      console.error(error);
      this.loading = false;
    }, () => {
      console.log('finally');
    });*/

    this.authService.login(this.email.value, this.password.value).then(cred => {
      localStorage.setItem('email', this.email.value);
      console.log(cred);
      this.router.navigateByUrl('/main');
      this.loading = false;
    }).catch(error => {
      console.error(error);
      this.loading = false;
    });

  }

  ngOnDestroy(): void {
    this.loadingSubscription?.unsubscribe();
  }

}
