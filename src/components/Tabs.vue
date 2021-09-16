<template>
  <ul class="tabs" :class="{[classPrefix+'-tabs']:classPrefix}" >
    <li v-for="item in dataSource" :key="item.value"
        :class="{selected:item.value === value,[classPrefix+'-tabs-item']:classPrefix}"
        @click="select(item)"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
type DataSourceItem={
  text:string,
  value:string
}

@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
  @Prop(String) value!: string;
  @Prop(String) classPrefix!: string;

  select(item:DataSourceItem){
      this.$emit('update:value',item.value)
  }
}

</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  height: 64px;
  background:#e3b54c;
  font-size: 24px;
  > li {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      background: black;
      height: 2px;
      width: 100%;
    }
  }
}
</style>