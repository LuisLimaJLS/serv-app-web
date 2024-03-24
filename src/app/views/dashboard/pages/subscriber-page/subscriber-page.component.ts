import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbonadoModel } from '@core/models/abonado.model';
import { ColComponent, RowComponent } from '@coreui/angular';
import { CardBarCharComponent } from "@shared/components/card-bar-char/card-bar-char.component";
import { CardLineChartComponent } from '@shared/components/card-line-chart/card-line-chart.component';
import { CardPolarAreaChartComponent } from "@shared/components/card-polar-area-chart/card-polar-area-chart.component";
import { CardSubscriberComponent } from '@shared/components/card-subscriber/card-subscriber.component';
import { AbonadoService } from '@views/dashboard/services/abonado.service';
import { ListHistoryPageComponent } from "../../../history/pages/list-history-page/list-history-page.component";
import { EmisionModel } from '@core/models/emision.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-subscriber-page',
    standalone: true,
    templateUrl: './subscriber-page.component.html',
    styleUrl: './subscriber-page.component.css',
    imports: [
        CommonModule,
        RowComponent,
        ColComponent,
        CardBarCharComponent,
        CardPolarAreaChartComponent,
        CardLineChartComponent,
        CardSubscriberComponent,
        ListHistoryPageComponent
    ]
})
export class SubscriberPageComponent {

  dataAbonados: Array<AbonadoModel> = []
  maxEmissions: Array<EmisionModel> = []
  detailValues: Array<any> = []
  id_abonado: number;
  queryParams$: Observable<any> | undefined;

  constructor(
    private abonadoService: AbonadoService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      this.id_abonado =0;
     }

  ngOnInit(): void {
     // Escuchar cambios en los queryParams
     this.queryParams$ = this.route.queryParamMap;
     this.queryParams$.subscribe(params => {
       // Realizar acciones o cargar datos según los nuevos queryParams
       // Por ejemplo:
       this.id_abonado = params.get('id_abonado');
       if (this.id_abonado) {
        this.loadDataAll();
        this.loadMaxEmisionsByAbonado();
        this.loadDetailValuesByAbonado();
       }
     });

  }

  async loadDataAll(): Promise<any> {
    this.abonadoService.getAllEmisionsByAbonado$(this.id_abonado, '6').subscribe({
      next: (info) => {
        this.dataAbonados = info
        this.dataAbonados.forEach(function (abonado) {
          if (abonado.emisiones !== undefined) {
            if (abonado.estado == 0){
              abonado.color = { color: 'secondary', textColor: 'secondary' }
            }else{
              if (abonado.emisiones[0].promedio_consumo >= abonado.emisiones[0].consumo)
                abonado.color = { color: 'success', textColor: 'success' }
              else if ((abonado.emisiones[0].promedio_consumo * 2) <= (abonado.emisiones[0].consumo))
                abonado.color = { color: 'danger', textColor: 'danger' }
              else
                abonado.color = { color: 'warning', textColor: 'warning' }
            }
          } else{
            abonado.color = { color: 'dark', textColor: 'dark' }
          }
        });
      },
      error: (error: any) => {console.log("ERROR: ",error)}
    });


  }

  async loadMaxEmisionsByAbonado(): Promise<any> {
    this.abonadoService.maxEmisionsByAbonado$(this.id_abonado, '6').subscribe({
      next: (info) => {
        this.maxEmissions = info
      },
      error: (error: any) => {console.log("ERROR: ",error)}
    });
  }

  async loadDetailValuesByAbonado(): Promise<any> {
    this.abonadoService.getDetailValuesByAbonado$(this.id_abonado, '6').subscribe({
      next: (info) => {
        this.detailValues = info
      },
      error: (error: any) => {console.log("ERROR: ",error)}
    });
  }

}
