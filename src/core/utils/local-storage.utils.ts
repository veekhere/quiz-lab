import { APPLICATION } from '@constants';

export class LocalStorage {

  private static currentApplication = APPLICATION;

  static getItem<T>(key: string): T | null {
    const _key = this.getKey(key);
    const data = localStorage.getItem(_key);
    return data ? JSON.parse(data) : null;
  }

  static setItem<T>(key: string, value: T): void {
    const _key = this.getKey(key);
    if (value) {
      localStorage.setItem(_key, JSON.stringify(value));
    } else {
      localStorage.removeItem(_key);
    }
  }

  static removeItem(key: string): void {
    const _key = this.getKey(key);
    localStorage.removeItem(_key);
  }

  private static getKey(key: string): string {
    return `${this.currentApplication}_${key}`;
  }
}
