import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsInterface } from '../../../interfaces/ecommerce.interfaces';
import { Products } from "./../../../data/data";
import { from } from "rxjs/observable/from";
import { take, tap, map } from 'rxjs/operators';

import { Router } from "@angular/router";

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {

  public mostrar: boolean = false;
  public arrivalProducts: Array<ProductsInterface> = [];

  constructor(private router: Router) {
    this.ObtenerNewArrival();
  }

  ngOnInit() {
  }

  public MostrarDiv(){
    this.mostrar = !this.mostrar;
  }

  public ObtenerNewArrival(){
    from(Products)
    .pipe(
      map((producto: ProductsInterface) => {
        let DireccionImagen = `./../../../../assets/${producto.img}`;
        return {
          ...producto, 
          img: DireccionImagen
        }
      }),
      take(3),
      tap((value: ProductsInterface) => this.arrivalProducts.push(value))
    )
    .subscribe((value) => console.log(this.arrivalProducts));
  }

  public GetIdToChangeScreen(id: number){
    console.log(id);

    this.router.navigate(['detail-products', id]);
  }

}
