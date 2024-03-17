import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardServiceComponent } from '../card-service/card-service.component';
import { AbonadoModel } from '@core/models/abonado.model';
import { CardModule, RowComponent, ColComponent, BorderDirective, ButtonDirective } from '@coreui/angular';
import { CardLineChartComponent } from '../card-line-chart/card-line-chart.component';

@Component({
  selector: 'app-section-generic',
  standalone: true,
  imports: [
    CommonModule,
    CardServiceComponent,
    CardLineChartComponent,
    CardModule,
    RowComponent,
    ColComponent,
    BorderDirective,
    ButtonDirective
  ],
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent {
  @Input() title:string=''
  @Input() mode: 'small' | 'big' ='big'
  @Input() dataAbonados: Array<AbonadoModel> = []

  colors = [
    { color: 'primary', textColor: 'primary' },
    { color: 'secondary', textColor: 'secondary' },
    { color: 'success', textColor: 'success' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'info', textColor: 'info' },
    { color: 'light' },
    { color: 'dark' }
  ];
  constructor(){

  }
}
