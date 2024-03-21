import { Component } from '@angular/core';
import { BorderDirective, CardModule } from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';

@Component({
  selector: 'app-card-polar-area-chart',
  standalone: true,
  imports: [
    ChartjsComponent,
    CardModule,
    BorderDirective
  ],
  templateUrl: './card-polar-area-chart.component.html',
  styleUrl: './card-polar-area-chart.component.css'
})
export class CardPolarAreaChartComponent {
  data = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB']
      }
    ]
  };
}
