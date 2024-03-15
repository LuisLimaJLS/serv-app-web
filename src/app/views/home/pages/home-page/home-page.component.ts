import { Component } from '@angular/core';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';
import { HeaderComponent } from "@shared/components/header/header.component";


@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [SideBarComponent, HeaderComponent]
})
export class HomePageComponent {

}
