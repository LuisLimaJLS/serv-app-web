import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { navItems } from './_nav';
import { AbonadoService } from '@views/dashboard/services/abonado.service';
import { CookieService } from 'ngx-cookie-service';
import { AbonadoModel } from '@core/models/abonado.model';
import { Observable } from 'rxjs';
//import { SidebarComponent, SidebarBrandComponent, SidebarNavComponent, SidebarTogglerComponent } from '@coreui/angular';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    //SidebarComponent,
    //SidebarBrandComponent,
    //SidebarNavComponent,
    //SidebarTogglerComponent,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  mainMenu: {
    defaultOptions: Array<any>, customOptions: Array<any>
  } = { defaultOptions: [], customOptions: [] }

  public navItems = navItems;
  identifier:string = this.cookie.get('userId');
  dataAbonados: Array<AbonadoModel> = []

  isSidebarOpen = true;
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    this.toggleSidebar(event.target.innerWidth);
  }

  toggleSidebar(windowWidth: number) {
    this.isSidebarOpen = windowWidth > 768;
  }

  idAbonado: number = 0;

  constructor(private router: Router,
    private abonadoService: AbonadoService,
    private cookie: CookieService) { }

  ngOnInit(): void {
    this.loadCustomOptions();
    this.mainMenu.defaultOptions = this.navItems
    this.mainMenu.customOptions = [
    ]
  }

  async loadCustomOptions(): Promise<any> {
    this.abonadoService.getAllAbonados$(this.identifier, '0').subscribe({
      next: (info) => {
        this.dataAbonados = info
        this.dataAbonados.forEach( (abonado) => {
          /*this.abonadoService.setAbonadoId(abonado.id);
          this.abonadoService.getAbonadoId().subscribe(id => {
            this.idAbonado = id;
          });*/

          this.mainMenu.customOptions.push (
            {
              name: abonado.nro_medidor,
              icon: 'uil uil-tear',
              router: ['/', 'home', 'subscriber'],
              query : {id_abonado: abonado.id},
            }
          )
        });
      },
      error: (error: any) => {console.log("ERROR: ",error)}
    })
  }

  /*showService(id_abonado: number): void {
    this.router.navigate(['/home/subscriber', id_abonado]);
  }*/

}
