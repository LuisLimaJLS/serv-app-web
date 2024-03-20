import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { navItems } from './_nav';
//import { SidebarComponent, SidebarBrandComponent, SidebarNavComponent, SidebarTogglerComponent } from '@coreui/angular';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    //SidebarComponent,
    //SidebarBrandComponent,
    //SidebarNavComponent,
    //SidebarTogglerComponent,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  mainMenu: {
    defaultOptions: Array<any>, customOptions: Array<any>
  } = { defaultOptions: [], customOptions: [] }

  public navItems = navItems;

  isSidebarOpen = true;
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    this.toggleSidebar(event.target.innerWidth);
  }

  toggleSidebar(windowWidth: number) {
    this.isSidebarOpen = windowWidth > 768;
  }

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.mainMenu.defaultOptions = this.navItems
    this.mainMenu.customOptions = [
      {
        name: 'MED-2053917C9',
        icon: 'uil uil-tear',
        router: ['/', 'home', 'subscriber'],
        query : {abonado: 4546546}
      },
      {
        name: 'MED-2053917C9',
        icon: 'uil uil-tear',
        router: ['/', 'home', 'subscriber'],
        query : {abonado: 4546546}
      },
      {
        name: 'MED-2053917C9',
        icon: 'uil uil-tear',
        router: ['/', 'home', 'subscriber'],
        query : {abonado: 4546546}
      },
    ]
  }


}
