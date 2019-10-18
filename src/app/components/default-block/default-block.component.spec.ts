import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultBlockComponent } from './default-block.component';

describe('DefaultBlockComponent', () => {
  let component: DefaultBlockComponent;
  let fixture: ComponentFixture<DefaultBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
