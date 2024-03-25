import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataEmisionModel } from '@core/models/dataemision.model';
import { ColComponent, RowComponent } from '@coreui/angular';
import { CardEmissionComponent } from '@shared/components/card-emission/card-emission.component';
import { CardLineChartComponent } from '@shared/components/card-line-chart/card-line-chart.component';
import { CardPhotoComponent } from '@shared/components/card-photo/card-photo.component';
import { AbonadoService } from '@views/dashboard/services/abonado.service';
import { Observable } from 'rxjs';
import { ListValuesPageComponent } from '../list-values-page/list-values-page.component';
import { CardInvoiceComponent } from "@shared/components/card-invoice/card-invoice.component";

@Component({
    selector: 'app-emission-page',
    standalone: true,
    templateUrl: './emission-page.component.html',
    styleUrl: './emission-page.component.css',
    imports: [
        CommonModule,
        RowComponent,
        ColComponent,
        CardEmissionComponent,
        CardLineChartComponent,
        CardPhotoComponent,
        ListValuesPageComponent,
        CardInvoiceComponent
    ]
})
export class EmissionPageComponent {
  id_emision: number = 0;
  queryParams$: Observable<any> | undefined;
  dataEmision: DataEmisionModel | undefined;
  this_color = { color: 'success', textColor: 'success' }
  constructor(
    private abonadoService: AbonadoService,
    private route: ActivatedRoute,
    ) {
     }


  ngOnInit(): void {
    // Escuchar cambios en los queryParams
    this.queryParams$ = this.route.queryParamMap;
    this.queryParams$.subscribe(params => {
      // Realizar acciones o cargar datos según los nuevos queryParams
      // Por ejemplo:
      this.id_emision = params.get('id_emision');
      if (this.id_emision) {
       this.loadDataAll();
       //this.loadMaxEmisionsByAbonado();
       //this.loadDetailValuesByAbonado();
      }
    });
 }

 async loadDataAll(): Promise<any> {
  this.abonadoService.getDataByEmission$(this.id_emision, '6').subscribe({
    next: (info) => {
      this.dataEmision = info
      if (this.dataEmision && this.dataEmision.emisiones && this.dataEmision.emisiones.length > 0) {
        const primerEmision = this.dataEmision.emisiones[0];
        // Verificar si la tupla tiene al menos un elemento antes de acceder al elemento en la posición 0
        if (primerEmision) {
          if (this.dataEmision?.emisiones[0].promedio_consumo >= this.dataEmision.emisiones[0].consumo)
            this.this_color = { color: 'success', textColor: 'success' }
          else if ((this.dataEmision.emisiones[0].promedio_consumo * 2) <= (this.dataEmision.emisiones[0].consumo))
            this.this_color = { color: 'danger', textColor: 'danger' }
          else
            this.this_color = { color: 'warning', textColor: 'warning' }
        }
      } else{
        this.this_color = { color: 'dark', textColor: 'dark' }
      }

    },
    error: (error: any) => {console.log("ERROR: ",error)}
  });


}

}
