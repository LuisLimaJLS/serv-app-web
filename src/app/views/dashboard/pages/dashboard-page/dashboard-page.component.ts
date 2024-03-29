import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AbonadoModel } from '@core/models/abonado.model';
import { EmisionModel } from '@core/models/emision.model';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';
import { AbonadoService } from '@views/dashboard/services/abonado.service';
import { response } from 'express';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [SectionGenericComponent, HttpClientModule],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {
  dataAbonados: Array<AbonadoModel> = []
  listObservers$: Array<Subscription> = []

  identifier:string = this.cookie.get('userId');

  constructor(
    private abonadoService: AbonadoService,
    private cookie: CookieService
    ) { }

  ngOnInit(): void {
    this.loadDataAll()
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

