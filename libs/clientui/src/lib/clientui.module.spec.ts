import { async, TestBed } from '@angular/core/testing';
import { ClientuiModule } from './clientui.module';

describe('ClientuiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientuiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ClientuiModule).toBeDefined();
  });
});
