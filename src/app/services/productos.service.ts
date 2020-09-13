import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productosUrl: string = 'https://tarea2-unidadiii.firebaseio.com/productos.json';
  productoUrl: string = 'https://tarea2-unidadiii.firebaseio.com/productos/';

  constructor(private http: HttpClient) { }

  nuevoProducto( producto: Producto) {
    let body = JSON.stringify( producto );
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this.http.post( this.productosUrl, body, {headers} );
  }

  actualizarProducto( producto: Producto, key$: string) {
    let body = JSON.stringify( producto );
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let url = `${ this.productoUrl }/${ key$ }.json`;

    return this.http.put( url, body, {headers} );
  }

  getProducto(key$: string) {
    let url = `${ this.productoUrl }/${ key$ }.json`;

    return this.http.get(url );
  }

  getProductos() {
    return this.http.get( this.productosUrl );
  }

  borrarProducto( key$: string) {
    let url = `${ this.productoUrl }/${ key$ }.json`;

    return this.http.delete ( url );
  }
}
