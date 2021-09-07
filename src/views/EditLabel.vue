<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="right"></span>
    </div>
    <div class="formWapper">
      <FormItem file-name="标签名"
                place-holder="请输入"
                :value="tag.name"
                @update:value="update"
      />
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModels';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';
import Tags from '@/components/Money/Tags.vue';
@Component({
  components: {Button, FormItem}
})
export default class EditLabel extends Vue {
  tag?:{id:string,name:string} =undefined
  created(){
    const id = this.$route.params.id
    tagListModel.fetch()
    const tags = tagListModel.data
    const tag = tags.filter(item => item.id === id)[0]
    if(tag){
      this.tag = tag
    }else{
      this.$router.replace('/404')
    }

  }
  update(name:string){
    if(this.tag){
      tagListModel.update(this.tag.id,name)
    }
  }
  remove(){
    if(this.tag){
      tagListModel.remove(this.tag.id)
      this.$router.back()
    }
  }
  goBack(){
    this.$router.back()
  }

}
</script>

<style lang="scss" scoped>
.navBar{
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: white;
  font-size: 16px;
  .leftIcon{

    width:24px;
    height:24px;
  }
  .title{

  }
  .right{
    width:24px;
    height:24px;
  }
}
.formWapper{
  background: white;
  margin-top: 8px;
}
.button-wrapper{
  text-align: center;
  padding: 16px;
  margin-top: 28px;
}
</style>