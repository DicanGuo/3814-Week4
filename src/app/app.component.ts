import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week4tut';
  constructor(private router: Router){

  }

  ngOnInit(){}

  navbyurl(id:number){
    this.router.navigateByUrl('/account/' + id);

  }
  // navby(id:number){
  //   this.router.navigate('/account', id);
    
  // }
}
