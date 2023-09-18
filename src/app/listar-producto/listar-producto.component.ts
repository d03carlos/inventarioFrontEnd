import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent {
  productos:Producto[];
  constructor(private productService:ProductService) {}
  ngOnInit(){
    this.obtenerProductos();
  }
  private obtenerProductos(){
    this.productService.obtenerProductos().subscribe(data=>this.productos=data)
  }
}

