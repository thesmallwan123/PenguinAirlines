import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestionationComponent } from './destionation.component';

describe('DestionationComponent', () => {
  let component: DestionationComponent;
  let fixture: ComponentFixture<DestionationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestionationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestionationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
