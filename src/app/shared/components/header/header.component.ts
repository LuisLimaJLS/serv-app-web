import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { navItems } from '../side-bar/_nav';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SearchPageComponent } from "@views/search/pages/search-page/search-page.component";
import { CookieService } from 'ngx-cookie-service';
import { AbonadoService } from '@views/dashboard/services/abonado.service';
import { AbonadoModel } from '@core/models/abonado.model';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CommonModule, RouterModule, SearchPageComponent]
})
export class HeaderComponent {

  mainMenu: {
    defaultOptions: Array<any>, customOptions: Array<any>, userOptions: Array<any>
  } = { defaultOptions: [], customOptions: [], userOptions: [] }
  identifier:string = this.cookie.get('userId');
  public navItems = navItems;
  isSidebarOpen = false;
  dataAbonados: Array<AbonadoModel> = []

  constructor(private router: Router,
    private abonadoService: AbonadoService,
    private cookie: CookieService,
    @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    ngOnInit(): void {

    this.loadCustomOptions();

    if (isPlatformBrowser(this.platformId)) {
      this.toggleSidebar(window.innerWidth);
    }
    this.mainMenu.defaultOptions = this.navItems
    this.mainMenu.customOptions = []

    this.mainMenu.userOptions = [
      {
        name: 'Configuración',
        icon: 'uil uil-setting',
        router: ['/', 'home', 'subscriber']
      },
      {
        name: 'Perfil',
        icon: 'uil uil-user',
        router: ['/', 'home', 'subscriber']
      },
      {
        name: 'Cerrar Sesión',
        icon: 'uil uil-sign-out-alt',
        router: ['/', 'auth', 'login']
      },
    ]
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    if (isPlatformBrowser(this.platformId)) {
      this.toggleSidebar(event.target.innerWidth);
    }
  }
  toggleSidebar(windowWidth: number) {
    if (isPlatformBrowser(this.platformId)) {
      this.isSidebarOpen = windowWidth < 768;
    }
  }

  logout(): void {
    this.cookie.delete('userId');
    this.cookie.delete('token');
    // Redirigir al usuario a la página de inicio de sesión (login)
    this.router.navigate(['/auth']);
  }

  async loadCustomOptions(): Promise<any> {
    this.abonadoService.getAllAbonados$(this.identifier, '0').subscribe({
      next: (info) => {
        this.dataAbonados = info
        this.dataAbonados.forEach( (abonado) => {
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

}
