import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from '../../../interfaces/ecommerce.interfaces';
import { Products, Departments } from '../../../data/data';
import { from } from 'rxjs/observable/from';
import { filter, map, tap } from 'rxjs/operators';

import { Router } from "@angular/router";

@Component({
  selector: 'app-smart-phones',
  templateUrl: './smart-phones.component.html',
  styleUrls: ['./smart-phones.component.css']
})
export class SmartPhonesComponent implements OnInit {

  public productsShow: Array<ProductsInterface> = [];

  constructor(private router: Router) { 
    this.GetProducts();
  }

  ngOnInit() {
  }

  public GetProducts(){
    let Departamento = Departments.find((departamento) => departamento.department === 'SmartPhones');

    // this.productsShow = Products.filter((producto) => producto.department === idDepartamento.id);
    // console.log(this.productsShow);

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

  public GetIdToChangeScreen(id: number){
    console.log(id);

    this.router.navigate(['detail-products', id]);
  }

}
