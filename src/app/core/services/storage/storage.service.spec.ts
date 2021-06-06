import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => (service = new StorageService()));

  afterAll(() => {
    // @Todo Remove keys from local storage
    service.set('dummyKey', null);
    service.set('jsonKey', null);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store values', () => {
    service.set('dummyKey', '123');
    expect(service.get('dummyKey')).toBe('123');
  });

  it('should get stored value in json format', () => {
    service.set('jsonKey', { username: 'Ankit Pant' });
    expect(service.get('jsonKey')).toEqual({ username: 'Ankit Pant' });
  });

  it('should return true if local storage has the key', () => {
    service.set('jsonKey', { username: 'Ankit Pant' });
    expect(service.has('jsonKey')).toBeTruthy();
  });
});
