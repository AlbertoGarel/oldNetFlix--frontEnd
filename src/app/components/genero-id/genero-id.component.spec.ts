import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroIdComponent } from './genero-id.component';

describe('GeneroIdComponent', () => {
  let component: GeneroIdComponent;
  let fixture: ComponentFixture<GeneroIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneroIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
