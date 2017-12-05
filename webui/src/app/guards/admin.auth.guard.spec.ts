import { TestBed, async, inject } from '@angular/core/testing';

import { AdminAuthGuard } from './admin.auth.guard';

describe('Admin.AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAuthGuard]
    });
  });

  it('should ...', inject([AdminAuthGuard], (guard: AdminAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});