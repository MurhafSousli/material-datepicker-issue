import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitePartnerComponent } from './invite-partner.component';

describe('InvitePartnerComponent', () => {
  let component: InvitePartnerComponent;
  let fixture: ComponentFixture<InvitePartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitePartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
