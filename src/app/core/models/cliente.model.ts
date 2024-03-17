export interface ClientModel {
  id: number;
  identificador: string;
  apellidos: string;
  nombres: string;
  direccion: string;
  fecha_nacimiento: Date;
  contrasena: string;
  estado: string;
  autenticado: string;
  token: string;
}
