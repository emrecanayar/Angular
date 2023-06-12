import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  //ActivatedRoute ile verileri okuma işlemi
  constructor(private activatedRoute: ActivatedRoute){
    activatedRoute.paramMap.subscribe(params=>console.log(params.get("id"))); // url den gelen id değerini okuma
    activatedRoute.data.subscribe(datas=>console.log(datas["productName"])); // data dan gelen değeri okuma
    activatedRoute.data.subscribe(datas=>console.log(datas["products"])); //guard dan gelen veriyi okuma 
  }

  //Angular 16 ile gelen Router Input özelliği ile okuma işlemi.(Standalone yapılandırmalarda genelde bunlar kullanılır.)
  @Input() id:string;
  @Input() productName:string;
  @Input() products:[];
}
