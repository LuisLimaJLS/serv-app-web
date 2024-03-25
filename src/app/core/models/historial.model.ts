export interface HistorialModel {
  id_abonado: number;
  id_emision: number;
  nro_medidor: string;
  emsion: string;
  fecha_emision: Date;
  novedad: string;
  lectura_actual: number;
  lectura_anterior: number;
  consumo: number;
  valor: number;
  estado: number;
  pagado: number;
  fecha_cobro: Date;
  nro_factura: string;
}
