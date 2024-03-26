import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmisionModel } from '@core/models/emision.model';
import { ColComponent, RowComponent } from '@coreui/angular';
import { AlertService } from '@views/alerts/services/alert.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-alerts-page',
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    CommonModule,
    RouterModule
  ],
  templateUrl: './alerts-page.component.html',
  styleUrl: './alerts-page.component.css'
})
export class AlertsPageComponent {
  dataAlerts: Array<EmisionModel> = []
  identifier:string = this.cookie.get('userId')
  constructor(
    private alertService: AlertService,
    private cookie: CookieService
    ) { }

  ngOnInit(): void {
    this.loadDataAll()
  }

  async loadDataAll(): Promise<any> {
    this.alertService.getMaxEmsionAlertByCi$(this.identifier, '6').subscribe({
      next: (info) => {
        this.dataAlerts = info
        this.dataAlerts.forEach(function (alert) {
          if (alert !== undefined) {
            if (alert.promedio_consumo >= alert.consumo)
              alert.color = { color: 'success', textColor: 'success' }
            else if ((alert.promedio_consumo * 2) <= (alert.consumo))
              alert.color = { color: 'danger', textColor: 'danger' }
            else
              alert.color = { color: 'warning', textColor: 'warning' }
          }
        });
      },
      error: (error: any) => {console.log("ERROR: ",error)}
    })
  }
}
