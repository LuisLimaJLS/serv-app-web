import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AbonadoModel } from '@core/models/abonado.model';
import { BorderDirective, ButtonDirective, CardModule } from '@coreui/angular';

@Component({
  selector: 'app-card-subscriber',
  standalone: true,
  imports: [
    CardModule,
    BorderDirective,
    CommonModule,
    ButtonDirective,
    RouterModule
  ],
  templateUrl: './card-subscriber.component.html',
  styleUrl: './card-subscriber.component.css'
})
export class CardSubscriberComponent {
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
}
