import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import * as Chart from 'chart.js';
import { APIService, ENDPOINT } from '../../shared/services/api.service';

declare var jQuery: any;
declare var $ :any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {

  data: any;
  canvas: any;
  ctx: any;
  subcription: ISubscription;

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.subcription = this.apiService.getDashboard(ENDPOINT.dashboardData).subscribe(res => {
      this.data = res;
      for(let i of this.data.overview) {
        i.number = i.number.toLocaleString();
      }
    });
  }

  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Facebook',
              data: [20, 83, 12, 55, 35, 41, 73],
              backgroundColor: 'rgba(66, 103, 178, .5)',
              borderColor: 'rgba(0, 109, 191, 1)',
              borderWidth: 1,
              pointStyle: 'rectRot',
              pointRadius: 5,
              pointBorderColor: 'rgba(0, 0, 0, 1)'
            },
            // {
            //   label: 'Twitter',
            //   data: [64, 27, 77, 43, 58, 92, 72],
            //   backgroundColor: 'rgba(29, 161, 242, .5)',
            //   borderColor: 'rgba(0, 109, 191, 1)',
            //   borderWidth: 1,
            //   pointStyle: 'rectRot',
            //   pointRadius: 5,
            //   pointBorderColor: 'rgba(0, 0, 0, 1)'
            // },
            {
              label: 'Instagram',
              data: [33, 21, 42, 73, 26, 63, 96],
              backgroundColor: 'rgba(233, 89, 80, .5)',
              borderColor: 'rgba(205, 72, 107, 1)',
              borderWidth: 1,
              pointStyle: 'rectRot',
              pointRadius: 5,
              pointBorderColor: 'rgba(0, 0, 0, 1)'
            }
            // {
            //   label: 'Google',
            //   data: [56, 32, 63, 22, 36, 73, 92],
            //   backgroundColor: 'rgba(223, 75, 55, .5)',
            //   borderColor: 'rgba(219, 50, 54, 1)',
            //   borderWidth: 1,
            //   pointStyle: 'rectRot',
            //   pointRadius: 5,
            //   pointBorderColor: 'rgba(0, 0, 0, 1)'
            // },
          ]
        },
      options: {
        title: {
          display: true,
          text: 'Social Statistic 2018',
          fontColor: "#000000",
          fontSize: 14
        },
        responsive: true,
        display: true,
        responsiveAnimationDuration: 1500,
        maintainAspectRatio: false
      }
    });
  }

}
