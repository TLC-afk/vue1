<template>
  <Layout>
    <Tabs :data-source="typeList" :value.sync="type"
          class-prefix="types"
    />

    <ol v-if="groupList.length>0">
      <li v-for="(group,index) in groupList" :key="index">
        <h3 class="title"><span class="date">{{ beautify(group.title) }}</span><span>￥{{ group.total }}</span></h3>

        <ol>
          <li v-for="item in group.items" :key="item.id"
              class="record">
            <span>{{ tagString(item.tags) }}</span>
            <span class="notes">{{ item.notes }}</span>
            <span>￥{{ item.mount }}</span>
          </li>
        </ol>
      </li>
    </ol>
<div v-else class="no-record">
  <Icon name="no-data"/>
  <span>暂无数据</span>
</div>

  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import typeList from '@/constant/typeList';
import dayjs from 'dayjs';
import clone from '@/lib/clone';

@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  type = '-';
  typeList = typeList;


  beautify(title: string) {
    const day = dayjs(title);
    if (day.isSame(dayjs(), 'day')) {
      return '今天';
    } else if (day.isSame(dayjs(), 'year')) {
      return day.format('M月D日');
    } else {
      return day.format('YYYY年M月D日');
    }
  }

  tagString(tags: Tag[]) {
    return tags.length === 0 ? '无' : tags.map(i =>i.name).join('，');
  }

  created() {
    this.$store.commit('fetchRecords');
  }

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get groupList() {
    let {recordList} = this;
    const newList = clone(recordList)
        .filter(r => r.type === this.type)
        .sort((a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf());
    if (newList.length === 0) {return [];}
    type Result = { title: string, items: RecordItem[], total?: number }[]
    const result: Result = [{title: dayjs(newList[0].createAt).format('YYYY-M-D'), items: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const last = result[result.length - 1];
      const current = newList[i];
      if (dayjs(current.createAt).isSame(last.title, 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createAt).format('YYYY-M-D'), items: [current]});
      }
    }
    result.forEach(group => {
      group.total = group.items.reduce((sum, item) => sum += item.mount, 0);
    });
    return result;
  }
};
</script>

<style lang="scss" scoped>
.date{
  color: #f7960b;
}
.no-record{
  padding: 16px;
  text-align: center;
  color:#999;
  ::v-deep .icon{
    width: 70px;
    height:70px;
  }
}
::v-deep {
  .types-tabs-item {
    background: white;

    &.selected {
      background: #e3b54c;

      &::after {
        display: none;
      }
    }
  }

  .interval-tabs {
    height: 48px;
  }

  %item {
    padding: 0 16px;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    @extend %item;
  }

  .record {
    background: white;
    @extend %item;

    .notes {
      margin-right: auto;
      margin-left: 8px;
      color: #999;
    }
  }
}
</style>