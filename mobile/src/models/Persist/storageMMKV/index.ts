import { MMKV } from 'react-native-mmkv';

export const storageMMKV = new MMKV({ id: 'com.finances.store' });

export class MMKVStoragePersist {
  storeData(key: string, data: any) {
    storageMMKV.set(key, data);
  }

  getData(key: string) {
    return storageMMKV.getString(key) || null;
  }

  getDataBoolean(key: string) {
    return storageMMKV.getBoolean(key);
  }

  removeItem(key: string) {
    try {
      storageMMKV.delete(key);
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default new MMKVStoragePersist();
