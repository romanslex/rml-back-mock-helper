import { DbSet, IHaveId } from './models';

class LocalStorageService {
  getCollection = <T extends IHaveId>(key: string): DbSet<T> => {
    return JSON.parse(localStorage.getItem(key) ?? '{}');
  };

  get = <T extends IHaveId>(key: string, id: string): T | undefined => {
    return this.getCollection<T>(key)[id];
  };

  add = <T extends IHaveId>(key: string, model: T): void => {
    const models = this.getCollection<T>(key);
    models[model.id] = model;
    localStorage.setItem(key, JSON.stringify(models));
  };

  update = <T extends IHaveId>(key: string, model: T): void => {
    const models = this.getCollection<T>(key);
    const currentModel = models[model.id];
    if (currentModel) {
      models[model.id] = { ...model };
    }
    localStorage.setItem(key, JSON.stringify(models));
  };

  remove = <T extends IHaveId>(key: string, id: string): void => {
    const models = this.getCollection<T>(key);
    delete models[id];
    localStorage.setItem(key, JSON.stringify(models));
  };
}

export const localStorageService = new LocalStorageService();
