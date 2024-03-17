import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbonadoModel } from '@core/models/abonado.model';
import { CardModule, RowComponent, ColComponent, BorderDirective, ButtonDirective } from '@coreui/angular';

@Component({
  selector: 'app-card-service',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    RowComponent,
    ColComponent,
    BorderDirective,
    ButtonDirective],
  templateUrl: './card-service.component.html',
  styleUrl: './card-service.component.css'
})
export class CardServiceComponent {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() abonado: AbonadoModel = { id: 0,
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
  };

  constructor() { }

  ngOnInit(): void {
  }

}
