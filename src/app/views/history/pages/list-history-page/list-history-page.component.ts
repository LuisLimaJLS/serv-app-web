import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { CardModule, BorderDirective, TemplateIdDirective} from '@coreui/angular';

import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AbonadoModel } from '@core/models/abonado.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HistoryService } from '@views/history/services/history.service';
import { CommonModule } from '@angular/common';
import { PayToTextPipe } from "@shared/pipes/pay-to-text.pipe";
import { StateToTextPipe } from "@shared/pipes/state-to-text.pipe";

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
        StateToTextPipe
    ]
})
export class ListHistoryPageComponent  implements AfterViewInit{

  displayedColumns: string[] = ['emision', 'lectura_actual', 'lectura_anterior', 'consumo', 'valor', 'pagado', 'fecha_cobro', 'fecha_emision', 'novedad', 'estado'];
  dataSource = new MatTableDataSource<any>();

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
    public _MatPaginatorIntl: MatPaginatorIntl
  ) {

  }
  ngOnInit(): void {
    this._MatPaginatorIntl.itemsPerPageLabel = 'Registros por Pagina';
    this.loadDataAll();
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
}
