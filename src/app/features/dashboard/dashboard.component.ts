import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { APIService, ENDPOINT } from '../../shared/services/api.service';

declare var jQuery: any;
declare var $ :any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {

  data: any;
  subcription: ISubscription;

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.subcription = this.apiService.getDashboard(ENDPOINT.dashboardData).subscribe(res => {
      this.data = res;
      console.log(this.data.overview, this.data.notification);
    });
  }

  ngAfterViewInit() {

  }

}
