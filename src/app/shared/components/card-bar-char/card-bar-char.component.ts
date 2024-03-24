import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { EmisionModel } from '@core/models/emision.model';
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
  @Input() header = 'MEDIDOR';
  @Input() color = { color: 'success', textColor: 'success' };
  @Input() dataEmisiones: EmisionModel[] | undefined = [];

  emisiones = ['202305', '202306', '202307', '202308', '202309', '202310'];
  consumos = [40, 20, 12, 39, 10, 80];
  data = {
    labels: ['202305', '202306', '202307', '202308', '202309', '202310'],
    datasets: [
      {
        label: 'Consumos más altos m3',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 80]
      }
    ]
  };
  router: any;

  ngOnInit(): void {
    this.loadDataAll()
  }
  loadDataAll() {
    this.emisiones = this.dataEmisiones ? this.dataEmisiones?.map(a => (a.emsion+"")) : [];
    this.consumos = this.dataEmisiones ? this.dataEmisiones?.map(a => (a.consumo)) : [];
    this.data['labels'] = this.emisiones;
    this.data['datasets'][0].data = this.consumos;
  }
}
