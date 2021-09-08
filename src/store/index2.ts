
import tagStore from '@/store/tagStore';
import storeRecord from '@/store/storeRecord';


const store = {
  ...storeRecord,
  ... tagStore


};
export default store