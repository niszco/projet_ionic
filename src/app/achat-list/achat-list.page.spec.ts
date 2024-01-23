import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AchatListPage } from './achat-list.page';

describe('AchatListPage', () => {
  let component: AchatListPage;
  let fixture: ComponentFixture<AchatListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AchatListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
