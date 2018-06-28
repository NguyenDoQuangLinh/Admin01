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
    this.canvas = document.getElementById('my-chart');
    this.ctx = this.canvas.getContext('2d');
    this.subcription = this.apiService.getDashboard(ENDPOINT.dashboardData).subscribe(res => {
      this.data = res;
      for(let i of this.data.overview) {
        i.number = i.number.toLocaleString();
      }

      let chartConfig = {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Facebook',
              data: this.data.statistic.facebook,
              backgroundColor: 'rgba(66, 103, 178, .5)',
              borderColor: 'rgba(0, 109, 191, 1)',
              borderWidth: 1,
              pointStyle: 'rectRot',
              pointRadius: 5,
              pointBorderColor: 'rgba(0, 0, 0, 1)'
            },
            {
              label: 'Instagram',
              data: this.data.statistic.instagram,
              backgroundColor: 'rgba(233, 89, 80, .5)',
              borderColor: 'rgba(205, 72, 107, 1)',
              borderWidth: 1,
              pointStyle: 'rectRot',
              pointRadius: 5,
              pointBorderColor: 'rgba(0, 0, 0, 1)'
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Social Statistic 2018',
            fontColor: "#000000",
            fontSize: 14
          },
          display: true,
          responsive: true,
          responsiveAnimationDuration: 1500
        }
      }

      let myChart = new Chart(this.ctx, chartConfig);
    });
  }

  ngAfterViewInit() { }

}
