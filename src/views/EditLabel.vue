<template>
  <Layout>
    <div class="edit">
      <Icon name="left"/>
      <span>编辑标签</span>
    </div>
    <Notes file-name="标签名" place-holder="请输入"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModels';
import Notes from '@/components/Money/Notes.vue';
@Component({
  components: {Notes}
})
export default class EditLabel extends Vue {
  created(){
    const id = this.$route.params.id
    tagListModel.fetch()
    const tags = tagListModel.data
    const tag = tags.filter(item => item.id === id)[0]
    if(tag){
      console.log(tag);
    }else{
      this.$router.replace('/404')
    }

  }

}
</script>

<style lang="scss" scoped>
.edit{
  display:flex;
}
</style>