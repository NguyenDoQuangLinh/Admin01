import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var jQuery: any;
declare var $ :any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {

  overview: any;
  notification: any;

  constructor() { }

  ngOnInit() {
    this.overview = [];
    this.notification = [];
  }

  ngAfterViewInit() {
    let overview_name = ['Facebook', 'Twitter', 'Instagram', 'Google'];
    let overview_percent = [70.1, 40.5, 76.3, 54.9];
    let overview_number = [7842900, 180200, 38900, 3988];
    let overview_icon = ['facebook-f', 'twitter', 'instagram', 'google'];

    let overview_length = overview_percent.length;
    for(let i = 0; i < overview_length; i++) {
      let str = overview_number[i].toLocaleString('en-us', {minimumFractionDigits: 0});
      let obj = {
        name: overview_name[i],
        percent: overview_percent[i],
        number: str,
        icon: overview_icon[i]
      }
      this.overview.push(obj);
    }

    let noti_name = ['new comment', '3 new follower', 'message sent', 'new task', 'server rebooted', 'server crashed', 'server not responding', 'new order placed', 'payment recieved'];
    let noti_time = ['4 minutes ago', '12 minutes ago', '27 minutes ago', '43 minutes ago', '11:32 PM', '11:13 AM', '10:57 AM', '9:49 AM', 'Yesterday'];
    // let noti_icon = ['comment', 'twitter', 'envelope', 'server', 'upload', 'bolt', 'exclamation-triangle', 'shopping-cart, money-bill-alt'];
    let noti_icon = [
      {
        prefix: 'fas',
        name: 'comment'
      },
      {
        prefix: 'fab',
        name: 'twitter'
      },
      {
        prefix: 'fas',
        name: 'envelope'
      },
      {
        prefix: 'fas',
        name: 'server'
      },
      {
        prefix: 'fas',
        name: 'upload'
      },
      {
        prefix: 'fas',
        name: 'bolt'
      },
      {
        prefix: 'fas',
        name: 'exclamation-triangle'
      },
      {
        prefix: 'fas',
        name: 'shopping-cart'
      },
      {
        prefix: 'fas',
        name: 'money-bill-alt'
      }
    ];


    let noti_length = noti_name.length;
    for(let i = 0; i < noti_length; i++) {
      let obj = {
        name: noti_name[i],
        time: noti_time[i],
        icon: noti_icon[i]
      }
      this.notification.push(obj);
    }
  }

}
