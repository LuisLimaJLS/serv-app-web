import { EmisionModel } from "./emision.mode";

export interface AbonadoModel {
  id: number;
  id_predio: string;
  id_categoria: string;
  nro_medidor: string;
  estado: number;
  fecha_instalacion: string;
  marca_medidor: string;
  direccion: string;
  secuencia: string;
  observacion: string;
  id_cliente: string;
  id_ruta: string;
  situacion: string;
  color?:any;
  emisiones?:EmisionModel[];
}
