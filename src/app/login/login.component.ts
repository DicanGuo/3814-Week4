import { HttpBackend, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const BACKEND_URL = 'http://localhost:3000';
// const httpOptions = {
//   headers: new HttpHeaders({'content-tpe': 'application/json'})
// };
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit {

  userid: string = '';
  password: string = '';
  // errorMassage = "User credential not match";
  errorMassage = "";
  users = {'userid': '', 'password': ''}
  constructor(private router: Router, private httpClient: HttpClient) { }

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
      // move to task 4 later
      sessionStorage.clear();
    }
    // this.router.navigate('/account:userid')
    // for (let i = 0; i < this.users.length; i ++){
    //   if (this.userid == this.users[i].userid && this.password == this.users[i].password) {
    //     this.router.navigateByUrl('/account/' + this.userid);
    //   }
    //   else {
    //     this.errorMassage = "User credential not match";
    //   }
    // }
  }

  // public loginfunc(){
  //   this.httpClient.post(BACKEND_URL, this.password, httpOptions).subscribe((data: any) => {
  //     alert(JSON.stringify(this.password));
  //     if(data.ok){
  //       sessionStorage.setItem('username', this.userid.toString());
  //       sessionStorage.setItem('password', this.password.toString());
  //       this.httpClient.post<any>(BACKEND_URL, this.users, httpOptions).subscribe((m:any) =>{
  //         console.log(m[0]);
  //       });
  //     }
  //   });


  //   // console.log(this.userid, this.password);
  //   // let user = {'username': this.userid}
  //   // if (typeof(Storage) !== "undefined"){
  //   //   console.log('storage ready');
  //   //   // localStorage.setItem(user.username, user.password);
  //   //   let sessionData = JSON.stringify(user);
  //   //   sessionStorage.setItem("user", sessionData);
  //   //   console.log(sessionStorage.getItem("user"));

  //   //   this.httpClient.post<any>(BACKEND_URL, { title: 'Angular POST Request Example' }).subscribe(data => sessionStorage)


  //   // } else {alert('error')}


    
  // }

  postLogin(){
    let users = {'username': this.userid, 'password': this.password}
    console.log(users)
    if (typeof(Storage) !== "undefined"){
      console.log('storage ready');
      // localStorage.setItem(user.username, user.password);
      let sessionData = JSON.stringify(users);
      sessionStorage.setItem("user", sessionData);
      console.log(sessionStorage.getItem("user"));

    }
    this.httpClient.post(BACKEND_URL + '/api/login', users).subscribe(res=>
      {console.log(res);},
      // (err:HttpErrorResponse)=>{
      //   console.log(err.error);
      // }
    );
  }
  // getNewData() {
  //   this.httpClient.get(BACKEND_URL).subscribe(res => {
  //     this.users = res;
  //   });
  // }
}
