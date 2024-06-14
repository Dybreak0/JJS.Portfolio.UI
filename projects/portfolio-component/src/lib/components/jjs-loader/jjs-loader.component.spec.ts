import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JjsLoaderComponent } from './jjs-loader.component';

describe('JjsLoaderComponent', () => {
  let component: JjsLoaderComponent;
  let fixture: ComponentFixture<JjsLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JjsLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JjsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
