import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    userid: string = '';
    password: string = '';
    // errorMassage = "User credential not match";
    errorMassage = "";
    
    users = [
      {'userid': '1', 'password': '123'},
      {'userid': '2', 'password': '123'},
      {'userid': '3', 'password': '123'}
    ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  itemClicked(){
    console.log(this.userid, this.password);
    let user = {'username': this.userid, 'password': this.password}
    if (typeof(Storage) !== "undefined"){
      console.log('storage ready');
      // localStorage.setItem(user.username, user.password);
      let sessionData = JSON.stringify(user);
      sessionStorage.setItem("user", sessionData);
      console.log(sessionStorage.getItem("user"));
      sessionStorage.clear();
    }
    // this.router.navigate('/account:userid')
    for (let i = 0; i < this.users.length; i ++){
      if (this.userid == this.users[i].userid && this.password == this.users[i].password) {
        this.router.navigateByUrl('/account/' + this.userid);
      }
      else {
        this.errorMassage = "User credential not match";
      }
    }
  }
}
