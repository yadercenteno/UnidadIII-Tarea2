import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public producto: any = {
    nombre: '',
    um: 'Unidad',
    precio: ''
  };

  nuevo = false;
  id: string;

  constructor(private productoService: ProductosService,
    private router: Router,
    private route: ActivatedRoute) {
      this.route.params
          .subscribe( parametros => {
            this.id = parametros['id'];

            if (this.id !== 'nuevo') {
              this.productoService.getProducto(this.id)
                .subscribe( producto => this.producto = producto );
            }
          });
  }

  ngOnInit(): void {
  }

  guardar() {
    if (this.id == 'nuevo') {
      // Nuevo registro
      this.productoService.nuevoProducto( this.producto )
      .subscribe( (data: any) => {
        this.router.navigate(['/productos']);
      },
      error => {
        console.log(error);
      });
    }
    else {
      // Actualizando los datos de un producto
      this.productoService.actualizarProducto( this.producto, this.id )
      .subscribe( (data: any) => {
        this.router.navigate(['/productos']);
      },
      error => console.log(error));
    }
  }

  agregarNuevo(forma: NgForm) {
    this.router.navigate(['/producto', 'nuevo']);

    forma.reset({
      nombre: '',
      um: 'Unidad',
      precio: '',
    });
  }
}
