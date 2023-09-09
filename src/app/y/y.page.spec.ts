import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YPage } from './y.page';

describe('YPage', () => {
  let component: YPage;
  let fixture: ComponentFixture<YPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(YPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
