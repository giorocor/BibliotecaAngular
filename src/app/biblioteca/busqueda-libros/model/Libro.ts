export class Libro{
  id?:number;
  titulo?:string;
  isbn?:string;
  tematica?:string;
  estado?:string;
  imagen?:string;
  paginas?:number;
  descripcion?:string;
  veces_prestado?:number;
  usuario?:{
    username?:string,
    nombre?:string,
    email?:string
  };
  editorial?:{
    id?:number,
    nombre?:string
  };
  autor?:{
    id?:number,
    nombre?:string,
    apellido?:string
  };
}
