import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GenericComponentComponent } from './generic-component.component';

describe('GenericComponentComponent', () => {
  let component: GenericComponentComponent;
  let fixture: ComponentFixture<GenericComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
