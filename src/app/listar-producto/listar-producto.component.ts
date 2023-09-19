import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent {
  productos:Producto[];
  constructor(private productService:ProductService, private router:Router) {}
  ngOnInit(){
    this.obtenerProductos();
  }
  private obtenerProductos(){
    this.productService.obtenerProductos().subscribe(data=>this.productos=data)
  }
  eliminarProducto(id:number){
    this.productService.eliminarProducto(id).subscribe(data=>this.obtenerProductos())
  }
  editarProducto(id:number){
    //this.productService.buscarProducto(id).subscribe(data=>console.log(data))
    this.router.navigate(['/editar',id]);
  }
}

