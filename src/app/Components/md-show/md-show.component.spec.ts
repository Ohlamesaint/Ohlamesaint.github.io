import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdShowComponent } from './md-show.component';

describe('MdShowComponent', () => {
  let component: MdShowComponent;
  let fixture: ComponentFixture<MdShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
