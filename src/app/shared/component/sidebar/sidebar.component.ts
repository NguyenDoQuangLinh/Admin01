import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var jQuery: any;
declare var $ :any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, AfterViewInit {

  dropdownBtn: any;
  submenu: any;
  barsBtn: any;
  sidebar: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dropdownBtn = $('.sidebar-dropdown-btn');
    this.submenu = $('.sidebar-submenu');
    this.barsBtn = $('.bars-btn');
    this.sidebar = $('.sidebar');
    for(let i of this.dropdownBtn) {
      i.setAttribute('dropdown', false);
      i.setAttribute('height', i.clientHeight);
      i.addEventListener('click', () => {
        this.showDropdownContent(i.getAttribute('dropdown'), i);
      });
      i.childNodes[5].style.height = 0;
    }
    for(let i of this.submenu) {
      i.setAttribute('height', i.clientHeight);
      i.className = 'sidebar-submenu-hidden';
    }
    this.barsBtn.attr('minimize', false);
    this.barsBtn.click(() => {
      this.minimizeSidebar(this.barsBtn.attr('minimize'));
    });
    console.log(this.sidebar);
  }

  showDropdownContent(temp, obj) {
    if(temp === 'true') {
      obj.setAttribute('dropdown', false);
      obj.className = 'sidebar-dropdown-btn';
      obj.childNodes[3].className = 'sidebar-submenu-hidden';
      obj.childNodes[3].style.height = 0;
      obj.childNodes[5].className = 'line-js';
      obj.childNodes[5].style.height = 0;
    } else {
      obj.setAttribute('dropdown', true);
      obj.className = 'sidebar-dropdown-btn-active';
      obj.childNodes[3].className = 'sidebar-submenu';
      obj.childNodes[3].style.height = obj.childNodes[3].getAttribute('height') + 'px';
      obj.childNodes[5].className = 'line-js-active';
      obj.childNodes[5].style.height = obj.getAttribute('height') + 'px';
      for(let i of this.dropdownBtn) {
        if(i !== obj) {
          i.setAttribute('dropdown', false);
          i.className = 'sidebar-dropdown-btn';
          i.childNodes[3].className = 'sidebar-submenu-hidden';
          i.childNodes[3].style.height = 0;
          i.childNodes[5].className = 'line-js';
          i.childNodes[5].style.height = 0;
        }
      }
    }
  }

  minimizeSidebar(minimize) {
    if(minimize === 'false') {
      minimize = true;
      this.sidebar.toggleClass('sidebar');
      this.sidebar.toggleClass('sidebar-minimize');
    } else {
      minimize = false;
      this.sidebar.toggleClass('sidebar-minimize');
      this.sidebar.toggleClass('sidebar');
    }
    this.barsBtn.attr('minimize', minimize);
  }

}
