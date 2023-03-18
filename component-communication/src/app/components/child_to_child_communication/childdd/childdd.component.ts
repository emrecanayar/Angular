import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-childdd',
  template: ` <p>Childdd Component</p>`,
})
export class ChildddComponent implements OnInit {
  ngOnInit(): void {
    this.data.emit({ message: 'Child dan parente gönderdim' });
  }

  @Output() data: EventEmitter<any> = new EventEmitter();
}
