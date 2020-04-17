import { Producto, Tipo } from './clases/producto2';
import { Component } from '@angular/core';
import { Alumno } from '../app/clases/alumno';
import { Profesor } from './clases/profesor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo  @Input()  @Output()  ';
  listadoPrincipal: Alumno[] ;
  alumnoSeleccionado:Alumno;
  profesorParaMostrar:Profesor;
  ListadoProfesoresPrincipal:Profesor[];

  listadoProductoPrincipal: Producto[] ;
  productoSeleccionado:Producto;

  constructor() { 
        this.profesorParaMostrar= new Profesor("Clementina","Programacion",777);
        this.listadoPrincipal = [
          { apellido: 'Aguas' ,nombre:"rogelio",legajo: 666 },
          { apellido: 'Mercurio' ,nombre:"Alfredo",legajo: 333 }
        ];

        this.ListadoProfesoresPrincipal= [
          { apellido: "Alvarez" ,materia:"matematicas",legajo: 666 },
          { apellido: "Villagran" ,materia:"prog 1",legajo: 333 }
        ];

        this.listadoProductoPrincipal = [
          { id: 1 ,descripcion:"papa",tipo: Tipo.solido, fechaDeVencimiento:"09/05/2020", precio: 80, rutaDeFoto: "https://upload.wikimedia.org/wikipedia/commons/0/05/Canonization_2014-The_Canonization_of_Saint_John_XXIII_and_Saint_John_Paul_II_%2814036966125%29.jpg"},
          { id: 2 ,descripcion:"batata",tipo: Tipo.solido, fechaDeVencimiento:"02/05/2020", precio: 100, rutaDeFoto: "https://d26lpennugtm8s.cloudfront.net/stores/509/903/products/batata1-ffb68ec8fa2892f68315121123434295-640-0.jpg"}
        ];
/*

    id: number;
    descripcion: string;
	tipo: Tipo;
	fechaDeVencimiento: string;
	precio: number;
	rutaDeFoto: string;
*/

    }
  tomarAlumnoCreado(NuevoAlumno: Alumno)
  {
    this.listadoPrincipal.push(NuevoAlumno);   
  }
  tomarAlumnoParaDetalles(NuevoAlumno: Alumno)
  {
    this.alumnoSeleccionado=NuevoAlumno;   
  }
  tomarProfesorParaDetalles(NuevoProfe: Profesor)
  {
    this.profesorParaMostrar=NuevoProfe;   
  }
  mostrarProfesor(parametroProfesor:Profesor)
  {
      console.info("profesor",parametroProfesor);
      //this.profesorParaMostrar=parametroProfesor;
      this.ListadoProfesoresPrincipal.push(parametroProfesor);
  }

  mostrarProducto(nuevoProducto: Producto)
  {
    this.listadoProductoPrincipal.push(nuevoProducto);   
  }

  tomarProductoParaDetalles(nuevoProducto: Producto)
  {
    console.info("Producto",nuevoProducto);

    this.productoSeleccionado=nuevoProducto;   
  }

}
