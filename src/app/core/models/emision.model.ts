export interface EmisionModel {
  id_abonado: number;
  id_emision: number;
  nro_medidor: string;
  emsion: string;
  consumo: number;
  valor: number;
  promedio_consumo: number;
  promedio_valor: number;
  color?:any;
}
