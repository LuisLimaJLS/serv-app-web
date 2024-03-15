import { Component } from '@angular/core';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';
import { HeaderComponent } from "@shared/components/header/header.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "@shared/components/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [SideBarComponent, HeaderComponent, CommonModule, RouterOutlet, FooterComponent]
})
export class HomePageComponent {

}
