import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmisionModel } from '@core/models/emision.model';
import { HistorialModel } from '@core/models/historial.model';
import { BorderDirective, ButtonDirective, CardModule } from '@coreui/angular';
import { PayToTextPipe } from "@shared/pipes/pay-to-text.pipe";
import { StateToTextPipe } from "@shared/pipes/state-to-text.pipe";

@Component({
    selector: 'app-card-emission',
    standalone: true,
    templateUrl: './card-emission.component.html',
    styleUrl: './card-emission.component.css',
    imports: [
        CardModule,
        BorderDirective,
        CommonModule,
        ButtonDirective,
        RouterModule,
        StateToTextPipe,
        PayToTextPipe
    ]
})
export class CardEmissionComponent {
  @Input() color = { color: 'success', textColor: 'success' };
  @Input() historial: HistorialModel | undefined = {
    consumo: 6,
    emsion: "2311",
    estado: 1,
    fecha_emision: new Date(),
    fecha_cobro: new Date(),
    id_abonado: 115147,
    id_emision: 2136393,
    lectura_actual: 445,
    lectura_anterior: 439,
    novedad: "NORMAL",
    nro_factura: "002-005-000203637",
    nro_medidor: "MED-F482C6DC2",
    pagado: 1,
    valor: 8.28
  };
}
