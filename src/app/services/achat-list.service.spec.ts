import { TestBed } from '@angular/core/testing';

import { AchatListService } from './achat-list.service';

describe('AchatListService', () => {
  let service: AchatListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchatListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
