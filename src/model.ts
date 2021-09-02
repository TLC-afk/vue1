const localStorageKeyName = 'recordList';
const model = {
  clone(data:RecordItem |RecordItem[]){
    JSON.parse(JSON.stringify(data))//深拷贝
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }

};

export default model;