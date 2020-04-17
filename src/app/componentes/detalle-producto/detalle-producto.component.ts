import { Component, OnInit ,Input} from '@angular/core';
import { Producto, Tipo } from '../../clases/Producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})

export class DetalleProductoComponent implements OnInit {
  @Input() productoParaMostrar: Producto;
  //unProducto

  constructor() { }

  ngOnInit() {
  }

}