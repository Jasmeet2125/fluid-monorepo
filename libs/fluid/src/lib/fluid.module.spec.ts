import { async, TestBed } from '@angular/core/testing';
import { FluidModule } from './fluid.module';

describe('FluidModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FluidModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FluidModule).toBeDefined();
  });
});
