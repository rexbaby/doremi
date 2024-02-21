/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OutworkerComponent } from './outworker.component';

describe('OutworkerComponent', () => {
  let component: OutworkerComponent;
  let fixture: ComponentFixture<OutworkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutworkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
