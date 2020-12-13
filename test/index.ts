import { mockLocalStorage } from '../src/localStorageMock';
import { localStorageService } from '../src/localStorageService';

describe('LocalStorageService', () => {
  it('get', () => {
    const g = global as any;
    const state = { id: '111' };

    g.localStorage = mockLocalStorage({
      key: JSON.stringify({ [state.id]: state }),
    });

    expect(localStorageService.get('key', state.id)).toEqual(state);
    expect(localStorageService.get('key', '222')).toBeUndefined();
    expect(localStorageService.get('no-exists-key', '222')).toBeUndefined();
  });

  it('getCollection', () => {
    const g = global as any;
    const state = { '111': { id: '111' }, '222': { id: '222' } };

    g.localStorage = mockLocalStorage({
      key: JSON.stringify(state),
    });

    expect(localStorageService.getCollection('key')).toEqual(state);
    expect(localStorageService.get('no-exists-key', '222')).toBeUndefined();
  });

  it('add', () => {
    const g = global as any;
    const state = { '111': { id: '111' }, '222': { id: '222' } };
    const result = { ...state, '333': { id: '333' } };

    g.localStorage = mockLocalStorage({
      key: JSON.stringify(state),
    });

    localStorageService.add('key', { id: '333' });
    expect(localStorageService.getCollection('key')).toEqual(result);

    localStorageService.add('key2', { id: '111' });
    expect(localStorageService.getCollection('key2')).toEqual({
      '111': { id: '111' },
    });
  });

  it('update', () => {
    const g = global as any;
    const state = { '111': { id: '111' }, '222': { id: '222' } };
    const result = { '111': { id: '111', name: 'name' }, '222': { id: '222' } };

    g.localStorage = mockLocalStorage({
      key: JSON.stringify(state),
    });

    localStorageService.update('key', { id: '111', name: 'name' });
    expect(localStorageService.getCollection('key')).toEqual(result);
  });

  it('remove', () => {
    const g = global as any;
    const state = { '111': { id: '111' }, '222': { id: '222' } };
    const result = { '111': { id: '111' } };

    g.localStorage = mockLocalStorage({
      key: JSON.stringify(state),
    });

    localStorageService.remove('key', '222');
    expect(localStorageService.getCollection('key')).toEqual(result);
  });
});
