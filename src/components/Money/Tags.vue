<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag"
          @click="toggle(tag)"
          :class="{selected:selectedTags.indexOf(tag) >= 0}">
        {{ tag }}
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop() dataSource: string[] | undefined;
  selectedTags: string[] = [];

  toggle(tag: string) {
    const index =this.selectedTags.indexOf(tag)
    if(index >= 0){
      this.selectedTags.splice(index,1)
    }else{
      this.selectedTags.push(tag);
    }
  }
};
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      $bg :#d9d9d9;
      background: $bg;
      margin-right: 12px;
      height: 24px;
      border-radius: 12px;
      padding: 0 16px;
      line-height: 24px;
      margin-top: 6px;
      &.selected{
        background:darken($bg,50%) ;
        color:white;
      }
    }
  }

  > .new {
    margin-top: 10px;

    button {
      background: transparent;
      border: none;
      border-bottom: 1px solid;
      padding: 0 4px;
      color: #999;
    }
  }
}

</style>