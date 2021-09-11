<template>
  <Layout>
    <Tabs :data-source="typeList" :value.sync="type"
          class-prefix="types"
    />
    <Tabs :data-source="intervalList" :value.sync="interval"
          class-prefix="interval"
    />
    <ol>
      <li v-for="(group,index) in result" :key="index">
        <h3 class="title">{{ group.title }}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id"
              class="record">
          <span>{{tagString(item.tags)}}</span>
            <span class="notes">{{item.notes}}</span>
           <span>￥{{ item.mount }}</span>
          </li>
        </ol>
      </li>
    </ol>


  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constant/intervalList';
import typeList from '@/constant/typeList';

@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  type = '';
  interval = '';
  intervalList = intervalList;
  typeList = typeList;

  tagString(tags:Tag[]){
     return tags.length ===0? '无': tags.join(',')
  }
  created() {
    this.$store.commit('fetchRecords');
  }

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    let {recordList} = this;
    type hashTableValue = { title: string, items: RecordItem[] }

    let hashTable: { [key: string]: hashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createAt!.split('T');
      hashTable[date] = hashTable[date] || {title: date, items: []};
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }
};
</script>

<style lang="scss" scoped>
::v-deep {
  .types-tabs-item {
    background: white;

    &.selected {
      background: #c4c4c4;

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
    .notes{
      margin-right: auto;
      margin-left: 8px;
      color: #999;
    }
  }
}
</style>