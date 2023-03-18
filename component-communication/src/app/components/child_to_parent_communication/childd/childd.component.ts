import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childd',
  template: `
  <p>Childd Component</p>
  `,
})
export class ChilddComponent implements OnInit{
 //Oluşturduğumuz eventi burada emit etmemiz gerekmektedir. Yani oluşturduğumuz event içerisinden veriyi burada gönderiyoruz.
  ngOnInit(): void {
   this.dataEvent.emit({message:"Merhaba"});
 }



  //Child dan parant e data göndermek için öncelikle bir event fırlatmamız gerekmektedir. Oluşturduğumuz bu event ide output ile işaretlememiz gerekmektedir.

 @Output() dataEvent :EventEmitter<any> = new EventEmitter();

}
