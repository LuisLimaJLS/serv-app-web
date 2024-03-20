import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, Input, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchModel } from '@core/models/search.model';
import { SearchService } from '@views/search/services/search.service';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  //listResults$: Observable<any> = of([])
  dataSearch: Array<SearchModel> = []
  src: string = '';
  @Input() mode: 'full' | 'min'  = 'full';
  @Input() isMin: boolean  = false;

  constructor(
    private searchService: SearchService,
    @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.toggleSidebar(window.innerWidth);
    }
  }
  callSearch(term: string): void {
    if (term.length >= 3) {
      //envia dato al padre
      if (this.mode == 'full'){
        this.searchService.getAllSearchFull$('2506716965001',term).subscribe({
          next: (info) => {
            this.dataSearch = info;
            this.loadColors(this.mode);
          },
          error: (error: any) => {console.log("ERROR: ",error)}
        })
      }else{
        this.searchService.getAllSearchMin$('2506716965001',term).subscribe({
          next: (info) => {
            this.dataSearch = info;
            this.loadColors(this.mode);
          },
          error: (error: any) => {console.log("ERROR: ",error)}
        })
      }
    }
  }
  loadColors(mode:string): void {
    this.dataSearch.forEach(function (data) {
      if (data.estado !== undefined && mode == 'full') {
        if (data.estado == 0){
          data.color = { color: 'secondary', tableColor: 'table-secondary' }
        }else{
          //console.log((abonado.emisiones[0].promedio_consumo * 2) <= (abonado.emisiones[0].consumo))
          if (data.promedio_consumo >= data.consumo)
            data.color = { color: 'success', tableColor: 'table-success' }
          else if ((data.promedio_consumo * 2) <= (data.consumo))
            data.color = { color: 'danger', tableColor: 'table-danger' }
          else
            data.color = { color: 'warning', tableColor: 'table-warning' }
        }
      } else{
        data.color = { color: 'light', tableColor: 'table-light' }
      }
    });
    //console.log(this.dataSearch)
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    if (isPlatformBrowser(this.platformId)) {
      this.toggleSidebar(event.target.innerWidth);
    }
  }
  toggleSidebar(windowWidth: number) {
    if (isPlatformBrowser(this.platformId)) {
      if (windowWidth > 768 && !this.isMin){
        this.mode = 'full';
      }else{
        this.mode = 'min';
      }
    }
  }

}
