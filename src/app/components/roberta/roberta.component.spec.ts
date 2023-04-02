import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobertaComponent } from './roberta.component';

describe('RobertaComponent', () => {
  let component: RobertaComponent;
  let fixture: ComponentFixture<RobertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RobertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
