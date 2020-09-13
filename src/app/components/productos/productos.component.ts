import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any = [];
  cargando = true;

  constructor(private _productosService: ProductosService) {
    this._productosService.getProductos()
      .subscribe( data => {
        this.productos = data;
        this.cargando = false;
      });
   }

  ngOnInit(): void {
  }

  borraProducto(key$: string) {
    this._productosService.borrarProducto(key$)
      .subscribe( respuesta => {
        if (respuesta) {
          console.log(respuesta);
        }
        else {
          //Todo salió bien
          delete this.productos[key$];
        }

      });
  }
}
