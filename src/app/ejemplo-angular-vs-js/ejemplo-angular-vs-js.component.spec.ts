import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploAngularVsJsComponent } from './ejemplo-angular-vs-js.component';

describe('EjemploAngularVsJsComponent', () => {
  let component: EjemploAngularVsJsComponent;
  let fixture: ComponentFixture<EjemploAngularVsJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploAngularVsJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploAngularVsJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
