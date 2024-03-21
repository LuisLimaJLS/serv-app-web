import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbonadoModel } from '@core/models/abonado.model';
import { TemplateIdDirective, RowComponent, ColComponent} from '@coreui/angular';

import { AbonadoService } from '@views/dashboard/services/abonado.service';
import { Subscription } from 'rxjs';
import { CardLineChartComponent } from '@shared/components/card-line-chart/card-line-chart.component';
import { ListHistoryPageComponent } from '../list-history-page/list-history-page.component';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [
    TemplateIdDirective,
    CommonModule,
    RowComponent,
    ColComponent,
    CardLineChartComponent,
    ListHistoryPageComponent
  ],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {

  dataAbonados: Array<AbonadoModel> = []
  listObservers$: Array<Subscription> = []
  identifier:string = this.cookie.get('userId');

  constructor(private abonadoService: AbonadoService,
    private cookie: CookieService
    ) { }

  ngOnInit(): void {
    this.loadDataAll();
  }

  async loadDataAll(): Promise<any> {
    //this.dataAbonados = await this.abonadoService.getAllAbonados$().toPromise()
    this.abonadoService.getAllAbonados$(this.identifier, '6').subscribe({
      next: (info) => {
        this.dataAbonados = info
        this.dataAbonados.forEach(function (abonado) {
          if (abonado.emisiones !== undefined) {
            if (abonado.estado == 0){
              abonado.color = { color: 'secondary', textColor: 'secondary' }
            }else{
              //console.log((abonado.emisiones[0].promedio_consumo * 2) <= (abonado.emisiones[0].consumo))
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
    })
  }

}
