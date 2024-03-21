import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ColComponent, RowComponent } from '@coreui/angular';
import { CardBarCharComponent } from "@shared/components/card-bar-char/card-bar-char.component";
import { CardLineChartComponent } from '@shared/components/card-line-chart/card-line-chart.component';
import { CardPolarAreaChartComponent } from "@shared/components/card-polar-area-chart/card-polar-area-chart.component";
import { CardSubscriberComponent } from '@shared/components/card-subscriber/card-subscriber.component';

@Component({
    selector: 'app-subscriber-page',
    standalone: true,
    templateUrl: './subscriber-page.component.html',
    styleUrl: './subscriber-page.component.css',
    imports: [
        CommonModule,
        RowComponent,
        ColComponent,
        CardBarCharComponent,
        CardPolarAreaChartComponent,
        CardLineChartComponent,
        CardSubscriberComponent
    ]
})
export class SubscriberPageComponent {

}
