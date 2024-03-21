import { Component } from '@angular/core';
import { BorderDirective, CardModule } from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';

@Component({
  selector: 'app-card-bar-char',
  standalone: true,
  imports: [
    ChartjsComponent,
    CardModule,
    BorderDirective
  ],
  templateUrl: './card-bar-char.component.html',
  styleUrl: './card-bar-char.component.css'
})
export class CardBarCharComponent {
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 80, 40]
      }
    ]
  };
}
