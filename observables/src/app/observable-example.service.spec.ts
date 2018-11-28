import { TestBed, inject } from '@angular/core/testing';

import { ObservableExampleService } from './observable-example.service';

describe('ObservableExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObservableExampleService]
    });
  });

  it('should be created', inject([ObservableExampleService], (service: ObservableExampleService) => {
    expect(service).toBeTruthy();
  }));
});
