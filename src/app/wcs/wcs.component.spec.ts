import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcsComponent } from './wcs.component';

describe('WcsComponent', () => {
  let component: WcsComponent;
  let fixture: ComponentFixture<WcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WcsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
