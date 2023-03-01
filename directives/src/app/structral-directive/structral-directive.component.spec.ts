import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructralDirectiveComponent } from './structral-directive.component';

describe('StructralDirectiveComponent', () => {
  let component: StructralDirectiveComponent;
  let fixture: ComponentFixture<StructralDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructralDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructralDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
