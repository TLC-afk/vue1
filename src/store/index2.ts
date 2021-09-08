import tagListModel from '@/models/tagListModels';
import recordListModel from '@/models/recordListModel';

const store = {
  //tag store
  tagList: tagListModel.fetch(),
  findTag: (id: string) => {
    return store.tagList.filter(item => item.id === id)[0];
  },
  createTag: (name: string) => {
    const message = tagListModel.create(name);
    if (message === 'duplicated') {
      window.prompt('标签名重复了');
    } else if (message === 'success') {
      window.prompt('创建成功');
    }
  },
  removeTag: (id: string) => {
    return tagListModel.remove(id);
  },
  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name);
  },

  //record store
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => {
    recordListModel.create(record);
  },
};
export default store