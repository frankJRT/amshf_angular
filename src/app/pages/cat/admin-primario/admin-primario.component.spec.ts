import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrimarioComponent } from './admin-primario.component';

describe('AdminPrimarioComponent', () => {
  let component: AdminPrimarioComponent;
  let fixture: ComponentFixture<AdminPrimarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPrimarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrimarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
