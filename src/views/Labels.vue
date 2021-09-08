<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" :to="`/labels/edit/${tag.id}`"
                   v-for="tag in tags" :key="tag.id">
        <span>{{ tag.name }}</span>
        <Icon name="right"/>
      </router-link>

    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">新增标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';


@Component({
  components: {Button}
})
export default class Labels extends Vue {
  tags = window.tagList;

  createTag() {
    const name = window.prompt('请输入标签名');
    if (name) {
      window.createTag(name)
    }
  }
};
</script>

<style>
.tags .icon {
  margin-right: 16px;
  color: #666;
  height: 18px;
  width: 18px;
}
</style>
<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    display: flex;
    min-height: 44px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;

  }
}

.createTag-wrapper {
  text-align: center;
  margin-top: 40px;
}


</style>