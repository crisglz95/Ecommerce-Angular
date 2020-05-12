import { Component, OnInit } from '@angular/core';
import { Products } from "./../../../data/data";
import { from } from "rxjs/observable/from";
import { take, pluck, tap, map, filter } from "rxjs/operators";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  public FotosArray: Array<string> = [];
  constructor() {
    this.getImages();
  }

  ngOnInit() {
  }

  public getImages(){
    let valorElemento = 0;

    for (let index = 0; index < 2; index++) {
      const element = Math.floor(Math.random() * (Products.length - index - 1) + 1);
      const temporal = Products[element];
      this.FotosArray.push( `./../../../../assets/${temporal.img}`);
    }

    // from(Products)
    //   .pipe(
    //     // tap(() => i = Math.floor(Math.random() * (Products.length - 1) + 1)),
    //     // map(),
    //     take(2),
    //     pluck('img'),
    //     map((value) => `./../../../../assets/${value}`)
    //   ).subscribe(value => this.FotosArray.push(value));
  }

}
