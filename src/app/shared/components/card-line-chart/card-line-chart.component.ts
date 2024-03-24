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
  valor = [0, 0, 0, 0, 0, 0];
  valor_promedio = [0, 0, 0, 0, 0, 0];

  dataset_consumos = {
    label: 'Consumo m3',
    backgroundColor: 'rgba(151, 187, 205, 0.2)',
    borderColor: 'rgba(151, 187, 205, 1)',
    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
    pointBorderColor: '#fff',
    data: this.consumos
  }
  dataset_consumos_promedio = {
    label: 'Consumo Promedio m3',
    backgroundColor: 'rgba(220, 220, 220, 0.2)',
    borderColor: 'rgba(220, 220, 220, 1)',
    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
    pointBorderColor: '#fff',
    data: this.consumos_promedio
  }

  dataset_valor = {
    label: 'Valor $',
    backgroundColor: 'rgba(40, 159, 36, 0.2)',
    borderColor: 'rgba(0, 143, 36, 1)',
    pointBackgroundColor: 'rgba(0, 143, 36, 1)',
    pointBorderColor: '#fff',
    data: this.consumos
  }
  dataset_valor_promedio = {
    label: 'Valor Promedio $',
    backgroundColor: 'rgba(145, 222, 143, 0.2)',
    borderColor: 'rgba(145, 222, 143, 1)',
    pointBackgroundColor: 'rgba(145, 222, 143, 1)',
    pointBorderColor: '#fff',
    data: this.consumos_promedio
  }


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
      //console.log('handleChartRef', $chartRef);
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
      this.valor = this.dataEmisiones ? this.dataEmisiones?.map(a => (a.valor)) : [];
      this.valor_promedio = this.dataEmisiones ? this.dataEmisiones?.map(a => (a.promedio_valor)) : [];
      this.dataset_valor['data'] = this.valor.reverse();
      this.dataset_valor_promedio['data'] = this.valor_promedio.reverse();
      this.data['datasets'] = [this.dataset_valor,this.dataset_valor_promedio]


    } else if (this.mode == 'consume_summary'){
      this.consumos = this.dataEmisiones ? this.dataEmisiones?.map(a => (a.consumo)) : [];
      this.consumos_promedio = this.dataEmisiones ? this.dataEmisiones?.map(a => (a.promedio_consumo)) : [];
      this.dataset_consumos['data'] = this.consumos.reverse();
      this.dataset_consumos_promedio['data'] = this.consumos_promedio.reverse();
      this.data['datasets'] = [this.dataset_consumos,this.dataset_consumos_promedio]
    } else{
      this.valor = this.dataEmisiones ? this.dataEmisiones?.map(a => (a.valor)) : [];
      this.valor_promedio = this.dataEmisiones ? this.dataEmisiones?.map(a => (a.promedio_valor)) : [];
      this.consumos = this.dataEmisiones ? this.dataEmisiones?.map(a => (a.consumo)) : [];
      this.consumos_promedio = this.dataEmisiones ? this.dataEmisiones?.map(a => (a.promedio_consumo)) : [];
      this.data['labels'] = this.emisiones.reverse();

      this.dataset_consumos['data'] = this.consumos.reverse();
      this.dataset_consumos_promedio['data'] = this.consumos_promedio.reverse();
      this.dataset_valor['data'] = this.valor.reverse();
      this.dataset_valor_promedio['data'] = this.valor_promedio.reverse();
      this.data['datasets'] = [this.dataset_consumos,this.dataset_consumos_promedio,this.dataset_valor,this.dataset_valor_promedio]
    }




    //this.data['datasets'][0]['data'] = this.consumos.reverse();
    //this.data['datasets'][1]['data'] = this.consumos_promedio.reverse();
  }
}
