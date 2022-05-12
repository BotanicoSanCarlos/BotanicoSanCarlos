import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorridoVirtualComponent } from './recorrido-virtual.component';

describe('RecorridoVirtualComponent', () => {
  let component: RecorridoVirtualComponent;
  let fixture: ComponentFixture<RecorridoVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecorridoVirtualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecorridoVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
