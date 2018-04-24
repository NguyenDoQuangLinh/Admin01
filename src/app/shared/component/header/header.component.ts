import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var jQuery: any;
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, AfterViewInit {

  dropdownContent: any;
  profileDropdown: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dropdownContent = $('.profile-dropdown-content');
    this.profileDropdown = $('.profile-dropdown-btn');
    let count = 2;
    this.showProfileDropdownContent(count);
    this.profileDropdown.click(() => {
      count++;
      if(count % 2 === 0) {
        count = 2;
      } else {
        count = 1;
      }
      this.showProfileDropdownContent(count);
    });
  }

  showProfileDropdownContent(temp) {
    if(temp === 2) {
      this.dropdownContent[0].className = 'profile-dropdown-content-hidden';
      this.profileDropdown[0].className = 'profile-dropdown-btn';
    } else {
      this.dropdownContent[0].className = 'profile-dropdown-content';
      this.profileDropdown[0].className = 'profile-dropdown-btn-active';
    }
  }
}
