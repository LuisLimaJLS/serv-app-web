import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HttpClientModule]
})
export class AppComponent {
  title = 'serv-app-web';

  constructor(
    private iconSetService: IconSetService
  ) {
    // iconSet singleton
    iconSetService.icons = { ...iconSubset };
  }

}
