import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userid: any;
  usernum: number = 0;
  cnt: number = 0;
  paramsub: any;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsub = this.route.paramMap.subscribe(params => {
      this.userid = params.get('id');
    });
  }

  title = 'Account Page';

}
