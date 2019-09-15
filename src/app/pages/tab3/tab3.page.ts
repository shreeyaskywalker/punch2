import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor(public router: Router) {}

  tab1(){
    this.router.navigate(['tab1'])
  }
  tab2(){
    this.router.navigate(['tab2'])
  }
  tab3(){
    this.router.navigate(['tab3'])
  }
  tab4(){
    this.router.navigate(['tab4'])
  }
  tabs(){
    this.router.navigate(['tabs'])
  }
  ngOnInit() {
  }

}
