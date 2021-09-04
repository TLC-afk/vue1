<template>
  <Layout>
    <ol class="tags">
      <li v-for="tag in tags" :key="tag.id">
        <span>{{tag.name}}</span> <Icon name="right"/>
      </li>

    </ol>
    <div class="createTag-wapper">
      <button class="createTag" @click="createTag">新增标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModels';

tagListModel.fetch()
@Component
export default class Labels extends Vue{
  tags=tagListModel.data
  createTag(){
    const name = window.prompt("请输入标签名")
    if(name){
       const message = tagListModel.create(name)
      if(message === "duplicated"){
        window.prompt("标签名重复了")
      }else if(message === "success"){
        window.prompt("创建成功")
      }
    }
  }
};
</script>

<style>
.tags .icon{
  margin-right: 16px;
  color: #666;
  height: 18px;
  width: 18px;
}
</style>
<style lang="scss" scoped>
  .tags{
    background: white;
    font-size: 16px;
    padding-left: 16px;

    > li{
      display: flex;
      min-height: 44px;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e6e6e6;

    }
  }
  .createTag-wapper{
    text-align: center;
    margin-top:44px;
    > .createTag{
      background: #767676;
      border: none;
      border-radius: 4px;
      color: white;
      padding: 0 16px;
      height:40px;
    }
  }



</style>