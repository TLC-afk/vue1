
import clone from '@/lib/clone';
const localStorageKeyName = 'recordList';

const storeRecord ={
  recordList: [] as RecordItem[],
  saveRecords(){
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  },
  fetchRecords(){
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.recordList;
  },
  //record store
  createRecord(record: RecordItem)  {
    const record2: RecordItem = clone(record);
    record2.createAt = new Date();
    this.recordList && this.recordList.push(record2);
    this.saveRecords();
  },
}
storeRecord.fetchRecords()
export default  storeRecord