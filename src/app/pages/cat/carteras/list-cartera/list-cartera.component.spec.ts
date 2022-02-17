import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarteraComponent } from './list-cartera.component';

describe('ListCarteraComponent', () => {
  let component: ListCarteraComponent;
  let fixture: ComponentFixture<ListCarteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCarteraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCarteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
