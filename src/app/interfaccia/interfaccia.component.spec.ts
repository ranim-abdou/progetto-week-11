import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacciaComponent } from './interfaccia.component';

describe('InterfacciaComponent', () => {
  let component: InterfacciaComponent;
  let fixture: ComponentFixture<InterfacciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfacciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfacciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
