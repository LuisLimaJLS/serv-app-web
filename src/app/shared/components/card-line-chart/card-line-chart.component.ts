import { Component, Input } from '@angular/core';
import { AbonadoModel } from '@core/models/abonado.model';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { CardModule, BorderDirective} from '@coreui/angular';
import { EmisionModel } from '@core/models/emision.model';

@Component({
  selector: 'app-card-line-chart',
  standalone: true,
  imports: [
    ChartjsComponent,
    CardModule,
    BorderDirective
  ],
  templateUrl: './card-line-chart.component.html',
  styleUrl: './card-line-chart.component.scss'
})
export class CardLineChartComponent {
  @Input() header = 'MEDIDOR';
  @Input() color = { color: 'success', textColor: 'success' };
  //@Input() dataEmisiones: Array<any> = [];
  @Input() dataEmisiones: EmisionModel[] | undefined = [];
  @Input() mode: 'service' | 'consume_summary' | 'value_summary' | 'all_summary' ='service';
  /*@Input() abonado: AbonadoModel = { id: 0,
    id_predio: '',
    id_categoria: '',
    nro_medidor: '545646',
    estado: 1,
    fecha_instalacion: '',
    marca_medidor: '',
    direccion: '',
    secuencia: '',
    observacion: '',
    id_cliente: '',
    id_ruta: '',
    situacion: '',
    color:{ color: 'primary', textColor: 'primary' }
  };*/

  emisiones = ['202305', '202306', '202307', '202308', '202309', '202310'];
  consumos = [0, 0, 0, 0, 0, 0];
  consumos_promedio = [0, 0, 0, 0, 0, 0];
  data = {
    labels: this.emisiones,
    datasets: [
      {
        label: 'Consumo m3',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        data: this.consumos
      },
      {
        label: 'Consumo Promedio m3',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: this.consumos_promedio
      },
    ]
  };

  handleChartRef($chartRef: any) {
    if ($chartRef) {
      console.log('handleChartRef', $chartRef);
      //this.data.labels.push('August');
      //this.data.datasets[0].data.push(60);
      //this.data.datasets[1].data.push(20);
      setTimeout(() => {
        $chartRef?.update();
      }, 3000);
    }
  }

  ngOnInit(): void {
    this.loadDataAll()
  }
  loadDataAll() {
    //console.log("HOLA >> ", this.dataEmisiones?.map(a => (a.emsion)))
    this.emisiones = this.dataEmisiones ? this.dataEmisiones?.map(a => (a.emsion+"")) : [];
    if (this.mode == 'value_summary'){
      this.consumos = this.dataEmisiones ? this.dataEmisiones?.map(a => (a.valor)) : [];
      this.consumos_promedio = this.dataEmisiones ? this.dataEmisiones?.map(a => (a.promedio_valor)) : [];
      this.data['datasets'][0]['label'] = "Valor $";
      this.data['datasets'][1]['label'] = "Valor Promerdio $";
    } else if (this.mode == 'consume_summary'){
      this.consumos = this.dataEmisiones ? this.dataEmisiones?.map(a => (a.consumo)) : [];
      this.consumos_promedio = this.dataEmisiones ? this.dataEmisiones?.map(a => (a.promedio_consumo)) : [];
    } else{

    }
    this.data['labels'] = this.emisiones.reverse();
    this.data['datasets'][0]['data'] = this.consumos.reverse();
    this.data['datasets'][1]['data'] = this.consumos_promedio.reverse();
  }
}
