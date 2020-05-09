import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../../model/user/user';
import { Movie } from '../../model/movie/movie';
import { StorageService } from '../../services/storage/storage.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginData: User = new User();
  hide: Boolean = true;
  email: any = new FormControl('', [Validators.required, Validators.email]);
  password: any = new FormControl('', [
    Validators.required,
    Validators.pattern(
      /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
    ),
  ]);
  userWatchList: Array<Movie> = [];
  constructor(
    private storage: StorageService,
    private user: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  getErrorMessage() {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
      ? 'Not a valid email '
      : '';
  }

  getPasswordErrorMsg() {
    return this.password.hasError('required')
      ? 'You must enter a value'
      : this.password.hasError('pattern')
      ? 'Please enter only character string'
      : '';
  }

  login() {
    console.log('data', this.loginData);
    this.user.login(this.loginData).subscribe(
      (result) => {
        var array: any = result;
        var token = array.token.replace(/^"?(.+?)"?$/, '$1');
        // var imageUrl = array.data.data.imageUrl.replace(/^"?(.+?)"?$/, "$1");
        this.storage.set('token', token);
        this.userWatchList = array.data.data.watchList;

        this.storage.set('no-of-watchlist', this.userWatchList.length);
        for (let i = 0; i < this.userWatchList.length; i++) {
          this.storage.set('watchlist' + i, this.userWatchList[i]._id);
        }

        console.log('response----------------->', this.userWatchList);
        this.router.navigate(['home/movie']);
        this._snackBar.open('Login Successful', 'close')._dismissAfter(2000);
      },
      (err) => {
        console.log('error', err.error.message);
        this._snackBar.open(err.error.message, 'close')._dismissAfter(2000);
      }
    );
  }
}
