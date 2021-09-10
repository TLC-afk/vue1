<template>
  <Layout>
    <Tabs :data-source="typeList" :value.sync="type"
          class-prefix="types"
    />
    <Tabs :data-source="intervalList" :value.sync="interval"
          class-prefix="interval"
    />


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
  intervalList = intervalList
  typeList = typeList
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