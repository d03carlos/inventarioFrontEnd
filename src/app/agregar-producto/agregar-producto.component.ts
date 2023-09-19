import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {
  producto: Producto = new Producto();

  constructor(private productService: ProductService, private router: Router) {

  }
  onSubmit(){
    this.guardarProducto();
  }

  guardarProducto() {
    this.productService.agregarProducto(this.producto).subscribe(result => this.router.navigate(['/productos']));
  }
}
