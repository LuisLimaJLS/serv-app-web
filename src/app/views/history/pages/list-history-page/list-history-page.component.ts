import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { CardModule, BorderDirective, TemplateIdDirective} from '@coreui/angular';

import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AbonadoModel } from '@core/models/abonado.model';

@Component({
  selector: 'app-list-history-page',
  standalone: true,
  imports: [
    CardModule,
    BorderDirective,
    MatPaginatorModule,
    MatTableModule,
    TemplateIdDirective
  ],
  templateUrl: './list-history-page.component.html',
  styleUrl: './list-history-page.component.css'
})
export class ListHistoryPageComponent  implements AfterViewInit{

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name']; // Agrega más columnas si es necesario
  searchTerm: string | undefined;
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

  constructor(public _MatPaginatorIntl: MatPaginatorIntl) { }
  ngOnInit(): void {
    this._MatPaginatorIntl.itemsPerPageLabel = 'Registros por Pagina';
    this.loadDataAll();
  }

  async loadDataAll(): Promise<any> {
        ////////////////
    // Simula la carga de datos
    this.dataSource = new MatTableDataSource([
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' },
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' },
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' },
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' },
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' },
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' },
      // Agrega más datos si es necesario
    ]);

    // Configura la paginación
    this.dataSource.paginator = this.paginator;

  }
  filterData($event: any){
    this.dataSource.filter = $event.target.value.trim().toLocaleLowerCase();
  }

}
