import { TestBed, inject } from '@angular/core/testing';

import { QuickMenuService } from './quick-menu.service';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuickMenuService]
    });
  });

  it('should be created', inject([QuickMenuService], (service: QuickMenuService) => {
    expect(service).toBeTruthy();
  }));
});
