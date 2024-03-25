import { EmisionModel } from "./emision.model";
import { HistorialModel } from "./historial.model";
import { RubroModel } from "./rubro.model";

export interface DataEmisionModel {
  id_emision: number;
  emisiones: Array<EmisionModel>;
  rubros: Array<RubroModel>;
  history: HistorialModel;
}
