import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JjsButtonComponent } from './jjs-button.component';

describe('JjsButtonComponent', () => {
  let component: JjsButtonComponent;
  let fixture: ComponentFixture<JjsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JjsButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JjsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
