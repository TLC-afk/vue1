import createId from '@/lib/createId';

const localStorageKeyName = 'tagList';

const tagListModel: TagListModel = {
  data: [],
  create(name) {
    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) {return 'duplicated';}
    const id = createId().toString()
    this.data.push({id:id, name: name});
    this.save();
    return 'success';
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
  update(id: string, name: string) {
    const tag = this.data.filter(item => item.id === id)[0];
    if (tag) {
      const names = this.data.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        tag.name = name;
        this.save();
        return 'success';
      }
    } else {
      return 'not found';
    }
  },
  remove(id: string) {
    let index = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i;
        break;
      }
    }
    this.data.splice(index, 1);
    this.save()
    return 'success'
  }

};

export default tagListModel;