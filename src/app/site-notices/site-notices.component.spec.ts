import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteNoticesComponent } from './site-notices.component';

describe('SiteNoticesComponent', () => {
  let component: SiteNoticesComponent;
  let fixture: ComponentFixture<SiteNoticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteNoticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
