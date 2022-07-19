import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login-functions',
  templateUrl: './login-functions.component.html',
  styleUrls: ['./login-functions.component.css']
})
export class LoginFunctionsComponent implements OnInit {

  constructor(private jwtHelper: JwtHelperService, private router: Router) { }

  ngOnInit(): void {
  }

  isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    return false;
  }
  
  logOut = () => {
    this.router.navigate(["https://localhost:7185"]);
    localStorage.removeItem("jwt");
  }

}
