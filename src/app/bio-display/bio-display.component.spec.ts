import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioDisplayComponent } from './bio-display.component';

describe('BioDisplayComponent', () => {
  let component: BioDisplayComponent;
  let fixture: ComponentFixture<BioDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
