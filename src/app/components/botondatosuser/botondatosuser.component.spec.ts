import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotondatosuserComponent } from './botondatosuser.component';

describe('DatosuserComponent', () => {
  let component: BotondatosuserComponent;
  let fixture: ComponentFixture<BotondatosuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotondatosuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotondatosuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
