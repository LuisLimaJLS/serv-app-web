import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RubroModel } from '@core/models/rubro.model';
import { BorderDirective, CardModule } from '@coreui/angular';

@Component({
  selector: 'app-list-values-page',
  standalone: true,
  imports: [
    CardModule,
    BorderDirective,
    CommonModule,
    MatPaginatorModule,
    MatTableModule
  ],
  templateUrl: './list-values-page.component.html',
  styleUrl: './list-values-page.component.css'
})
export class ListValuesPageComponent {
  displayedColumns: string[] = ['id', 'descripcion', 'cantidad', 'valor_unitario', 'valor'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  @Input() rubros: Array<RubroModel> | undefined = []
  @Input() color = { color: 'success', textColor: 'success' };

  constructor(
    public _MatPaginatorIntl: MatPaginatorIntl,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

  }
  ngOnInit(): void {
    this._MatPaginatorIntl.itemsPerPageLabel = 'Registros por Pagina';
    this.dataSource = new MatTableDataSource<any>(this.rubros);
    this.dataSource.paginator = this.paginator;
  }
  filterData($event: any){
    this.dataSource.filter = $event.target.value.trim().toLocaleLowerCase();
  }

}
