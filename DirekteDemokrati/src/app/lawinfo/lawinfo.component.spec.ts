import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawinfoComponent } from './lawinfo.component';

describe('LawinfoComponent', () => {
  let component: LawinfoComponent;
  let fixture: ComponentFixture<LawinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
