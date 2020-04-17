import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Producto } from '../../clases/producto';
import { Tipo } from '../../clases/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Output() productoCreado: EventEmitter<any>= new EventEmitter<any>();
  unProducto:Producto;

  constructor() { }

  ngOnInit() {
    // this.unProducto= new Producto("alfredo","mercurio",666);
  }

  nuevoProducto()
  {
    console.info("Nuevo Producto");
    //let id:number =Math.floor((Math.random() * 1000) + 1);
    this.unProducto = new Producto("tomate", Tipo.solido, "10/11/2020", 50, "https://www.lovemysalad.com/sites/default/files/styles/image_415x281/public/tomates_-_vladimir_morozov.jpg?itok=gU1-XJyE");
  }

  crearProducto()
  {
    console.info("crearProducto");
    this.productoCreado.emit(this.unProducto);
    this.unProducto=null;
  }
}