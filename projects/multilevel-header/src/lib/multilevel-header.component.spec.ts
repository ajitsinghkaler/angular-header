import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilevelHeaderComponent } from './multilevel-header.component';

describe('MultilevelHeaderComponent', () => {
  let component: MultilevelHeaderComponent;
  let fixture: ComponentFixture<MultilevelHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultilevelHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultilevelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
