import { AfterViewInit, Component, HostListener, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { CardModule, BorderDirective, TemplateIdDirective} from '@coreui/angular';

import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule  } from '@angular/material/dialog';
import { AbonadoModel } from '@core/models/abonado.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HistoryService } from '@views/history/services/history.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PayToTextPipe } from "@shared/pipes/pay-to-text.pipe";
import { StateToTextPipe } from "@shared/pipes/state-to-text.pipe";
import { FormsModule } from '@angular/forms';
import { EmisionModel } from '@core/models/emision.model';
import { ImageModalComponent } from '@shared/components/image-modal/image-modal.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-list-history-page',
    standalone: true,
    templateUrl: './list-history-page.component.html',
    styleUrl: './list-history-page.component.css',
    imports: [
        CommonModule,
        CardModule,
        BorderDirective,
        MatPaginatorModule,
        MatTableModule,
        TemplateIdDirective,
        MatFormFieldModule,
        PayToTextPipe,
        StateToTextPipe,
        FormsModule,
        MatDialogModule,
        RouterModule
    ]
})
export class ListHistoryPageComponent  implements AfterViewInit{

  displayedColumns: string[] = ['emision', 'lectura_actual', 'lectura_anterior', 'consumo', 'valor', 'pagado', 'fecha_cobro', 'fecha_emision', 'novedad', 'estado'];
  dataSource = new MatTableDataSource<any>();
  @Input() mode: 'full' | 'min'  = 'full';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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

  constructor(
    private historyService: HistoryService,
    public _MatPaginatorIntl: MatPaginatorIntl,
    @Inject(PLATFORM_ID) private platformId: Object,
    public dialog: MatDialog
  ) {

  }
  ngOnInit(): void {
    this._MatPaginatorIntl.itemsPerPageLabel = 'Registros por Pagina';
    this.loadDataAll();

    if (isPlatformBrowser(this.platformId)) {
      this.toggleSidebar(window.innerWidth);
    }

  }

  async loadDataAll(): Promise<any> {
    this.historyService.getAllAbonadoHistory$(this.abonado.id).subscribe({
      next: (info) => {
        this.dataSource = new MatTableDataSource<any>(info);
        this.dataSource.paginator = this.paginator;
      },
      error: (error: any) => {console.log("ERROR: ",error)}
    })
  }
  filterData($event: any){
    this.dataSource.filter = $event.target.value.trim().toLocaleLowerCase();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    if (isPlatformBrowser(this.platformId)) {
      this.toggleSidebar(event.target.innerWidth);
    }
  }
  toggleSidebar(windowWidth: number) {
    if (isPlatformBrowser(this.platformId)) {
      if (windowWidth > 768){
        this.mode = 'full';
        this.displayedColumns = ['emision', 'lectura_actual', 'lectura_anterior', 'consumo', 'valor', 'pagado', 'fecha_cobro', 'fecha_emision', 'novedad', 'estado'];
      }else{
        this.mode = 'min';
        this.displayedColumns = ['emision', 'lectura_actual', 'lectura_anterior', 'consumo', 'valor', 'pagado'];
      }
    }
  }

  openImageModal(element: EmisionModel): void {

    const dialogRef = this.dialog.open(ImageModalComponent, {
      width: '400px',
      height: '400px',
      data: { imageUrl: "assets/images/user2.png" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
