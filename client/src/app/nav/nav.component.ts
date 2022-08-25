import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_model/user';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  loginForm: FormGroup;

  constructor(public accountService: AccountService, private router: Router
    , private toastr: ToastrService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm
      = this.formBuilder.group({
        username: [null, Validators.required],
        password: [null, Validators.required],
      });
  }

  login() {
    this.accountService.login(this.loginForm.value)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigateByUrl('/members');
        },
        error: (error) => {
          console.log(error);
          this.toastr.error(error.error);
        },
        complete: () => { console.log('complete login') }
      });
  }

  logout() {
    this.accountService.logout();
    console.log('complete logout');
    this.router.navigateByUrl('/');
  }
}
