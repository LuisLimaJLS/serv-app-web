import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { navItems } from './_nav';
import { SidebarComponent, SidebarBrandComponent, SidebarNavComponent, SidebarTogglerComponent } from '@coreui/angular';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent,
    SidebarBrandComponent,
    SidebarNavComponent,
    SidebarTogglerComponent,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

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
