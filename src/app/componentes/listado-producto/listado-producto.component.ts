import { Producto, Tipo } from './../../clases/producto';
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {

  @Input() listadoProductos: Producto[] ;
  @Output() productoSeleccionado: EventEmitter<any>= new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  mostrarDetalles(unProducto:Producto)
  {
    console.info("mostrar detalles",unProducto);
    this.productoSeleccionado.emit(unProducto);
  }

}
