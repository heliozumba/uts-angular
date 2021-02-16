import { TestBed } from '@angular/core/testing';

import { RenderPanelService } from './render-panel.service';

describe('RenderPanelService', () => {
  let service: RenderPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenderPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
