export interface ClientModel {
  id: number;
  identificador: string;
  apellidos: string;
  nombres: string;
  direccion: string;
  fecha_nacimiento: Date;
  contrasena: string;
  estado: number;
  autenticado: boolean;
  token: string;
  correo_electronico: string;
}
