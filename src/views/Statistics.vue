<template>
  <Layout>
    <Tabs :data-source="typeList" :value.sync="type"
          class-prefix="types"
    />
    <Tabs :data-source="intervalList" :value.sync="interval"
          class-prefix="interval"
    />
    <div>
      type:{{type}}
      <br>
      interval:{{interval}}
    </div>

  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Types from '@/components/Money/Types.vue';
import Tabs from '@/components/Tabs.vue';

@Component({
  components: {Tabs, Types}
})
export default class Statistics extends Vue {
  type = '';
  interval = '';
  intervalList = [
    {text: '按日', value: 'day'},
    {text: '按周', value: 'week'},
    {text: '按月', value: 'month'}
  ];
  typeList = [
    {text: '收入', value: '+'},
    {text: '支出', value: '-'}
  ];
};
</script>

<style lang="scss" scoped>
::v-deep .types-tabs-item {
  background: white;

  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }
}
</style>