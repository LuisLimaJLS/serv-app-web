import { Component } from '@angular/core';
import { SidebarModule } from '@coreui/angular';
import { navItems } from './_nav';
import { iconSubset } from 'src/app/icons/icon-subset';
import { IconSetService } from '@coreui/icons-angular';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [SidebarModule, NgScrollbarModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  public navItems = navItems;

  constructor(
    private iconSetService: IconSetService
  ){
    iconSetService.icons = { ...iconSubset };
  }


}
