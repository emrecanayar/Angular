import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-a',
  template: `<h2>Component A</h2>`,
})
//Query stringden gelen değeri okumak için öncelikle OnInit interfaceinden implement edelim.
export class AComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    //Query Stringden gelen değerleri okumaj için aşağıdaki işlemi kullanmaktayız.
    this.activatedRoute.queryParamMap.subscribe({
      next : queryStringParam => console.log(queryStringParam.get("x"))
    })
  }


}
