import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatouserComponent } from './datouser.component';

describe('DatouserComponent', () => {
  let component: DatouserComponent;
  let fixture: ComponentFixture<DatouserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatouserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
