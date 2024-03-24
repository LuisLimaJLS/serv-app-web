import { Component, Input } from '@angular/core';
import { RubroModel } from '@core/models/rubro.model';
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

  @Input() header = 'Valores';
  @Input() color = { color: 'success', textColor: 'success' };
  @Input() detailValues: RubroModel[] | undefined = [];

  backgroundColors = ['#FF6384', '#4BC0C0', '#FF735C', '#FFCE56', '#EC48EC', '#36A2EB', '#9C48EC', '#E7E9ED']
  labels = ['Red', 'Green', 'Orange', 'Yellow', 'Pink', 'Blue', 'Purple', 'Grey']
  values = [1.59, 0.48, 2.54, 0.69, 0.59, 2.18, 3.66, 3.3]

  data = {
    labels: ['Red', 'Green', 'Orange', 'Yellow', 'Pink', 'Blue', 'Purple', 'Grey'],
    datasets: [
      {
        data: [1.59, 0.48, 2.54, 0.69, 0.59, 2.18, 3.66, 3.3],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FF735C', '#FFCE56', '#EC48EC', '#36A2EB', '#9C48EC', '#E7E9ED']
      }
    ]
  };

  ngOnInit(): void {
    this.loadDataAll()
  }
  loadDataAll() {
    this.labels = this.detailValues ? this.detailValues?.map(a => (a.descripcion+"")) : [];
    this.values = this.detailValues ? this.detailValues?.map(a => (a.valor)) : [];
    this.data['labels'] = this.labels;
    this.data['datasets'][0].data = this.values;
  }
}
