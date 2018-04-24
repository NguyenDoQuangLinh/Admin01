import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var jQuery: any;
declare var $ :any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, AfterViewInit {

  dropdownBtn: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dropdownBtn = $('.sidebar-dropdown-btn');
    for(let i of this.dropdownBtn) {
      i.setAttribute('dropdown', false);
      // i.addEventListener('click', this.showDropdownContent(i.getAttribute('dropdown'), i));
    }
  }

  showDropdownContent(temp, obj) {
    if(temp === 'true') {
      console.log(123120);
      obj.ClassName = 'sidebar-dropdown-btn-active';
    } else {
      console.log('asda');
      obj.ClassName = 'sidebar-dropdown-btn';
    }
  }

}
