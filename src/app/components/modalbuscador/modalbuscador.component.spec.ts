import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalbuscadorComponent } from './modalbuscador.component';

describe('ModalbuscadorComponent', () => {
  let component: ModalbuscadorComponent;
  let fixture: ComponentFixture<ModalbuscadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalbuscadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalbuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
