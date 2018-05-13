import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var jQuery: any;
declare var $ :any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {

  overview: any;
  overviewProgress: any;
  overviewNumber: any;
  overviewDesc: any;

  constructor() { }

  ngOnInit() {
    this.overview = [];
  }

  ngAfterViewInit() {
    let name = ['Facebook', 'Twitter', 'Instagram', 'Google'];
    let percent = [70.1, 40.5, 76.3, 54.9];
    let number = [7842900, 180200, 38900, 3988];
    let icon = ['facebook-f', 'twitter', 'instagram', 'google'];

    let length = percent.length;
    for(let i = 0; i < length; i++) {
      let str = number[i].toLocaleString('en-us', {minimumFractionDigits: 0});
      let obj = {
        name: name[i],
        percent: percent[i],
        number: str,
        icon: icon[i]
      }
      this.overview.push(obj);
    }
  }

}
