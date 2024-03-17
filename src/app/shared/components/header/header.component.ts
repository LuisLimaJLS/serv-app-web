import { Component } from '@angular/core';
import { navItems } from '../side-bar/_nav';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mainMenu: {
    defaultOptions: Array<any>, customOptions: Array<any>
  } = { defaultOptions: [], customOptions: [] }

  public navItems = navItems;

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.mainMenu.defaultOptions = this.navItems
    this.mainMenu.customOptions = [
      {
        name: 'MED-2053917C9',
        icon: 'uil uil-tear',
        url: ['/']
      },
      {
        name: 'MED-2053917C9',
        icon: 'uil uil-tear',
        url: ['/']
      },
      {
        name: 'MED-2053917C9',
        icon: 'uil uil-tear',
        url: ['/']
      },
    ]
  }



}
