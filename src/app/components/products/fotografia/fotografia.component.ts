import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from '../../../interfaces/ecommerce.interfaces';
import { Departments, Products } from '../../../data/data';
import { from } from 'rxjs/observable/from';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.css']
})
export class FotografiaComponent implements OnInit {

  public productsShow: Array<ProductsInterface> = [];

  constructor() { 
    this.GetProducts();
  }

  ngOnInit() {
  }

  public GetProducts(){
    let Departamento = Departments.find((departamento) => departamento.department === 'Fotografía');

    from(Products).pipe(
      filter(producto => producto.department === Departamento.id), 
      map(producto => {
        let direccionImagen = `./../../../../assets/${producto.img}`;
        return{
          ...producto,
          img: direccionImagen
        }
      }),
      tap(productoActualizado => this.productsShow.push(productoActualizado))
    ).subscribe();

    console.log(this.productsShow);
  }

}
