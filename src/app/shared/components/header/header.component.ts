import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { navItems } from '../side-bar/_nav';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SearchPageComponent } from "@views/search/pages/search-page/search-page.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CommonModule, RouterModule, SearchPageComponent]
})
export class HeaderComponent {
  mainMenu: {
    defaultOptions: Array<any>, customOptions: Array<any>
  } = { defaultOptions: [], customOptions: [] }

  public navItems = navItems;
  isSidebarOpen = false;
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) { }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.toggleSidebar(window.innerWidth);
    }
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
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    if (isPlatformBrowser(this.platformId)) {
      this.toggleSidebar(event.target.innerWidth);
    }
  }
  toggleSidebar(windowWidth: number) {
    if (isPlatformBrowser(this.platformId)) {
      this.isSidebarOpen = windowWidth < 768;
    }
  }
}
