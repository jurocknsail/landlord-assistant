import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocataireDetailsPage } from './locataire-details.page';

describe('LocataireDetailsPage', () => {
  let component: LocataireDetailsPage;
  let fixture: ComponentFixture<LocataireDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LocataireDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});