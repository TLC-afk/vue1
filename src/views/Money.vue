<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateMount" @submit="saveRecord"/>
    <div class="notes">
      <FormItem @update:value="onUpdateNotes"
                :value="record.notes"
                file-name="备注"
                place-holder="在这里添加备注"
      />
    </div>
    <Tags @update:value="record.tags = $event"/>
    <Tabs :data-source="typeList" :value.sync="record.type"/>

  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import typeList from '@/constant/typeList';



@Component({
  components: {Tabs, Tags, FormItem,  NumberPad},
})

export default class Money extends Vue {
  typeList=typeList
  get recordList(){
    return this.$store.state.recordList
  }
  record: RecordItem = {
    tags: [], notes: '', type: '-', mount: 0
  };
  created(){
    this.$store.commit('fetchRecords')
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateMount(value: string) {
    this.record.mount = parseFloat(value);
  }

  saveRecord() {
    if(!this.record||this.record.tags.length=== 0){
       return window.alert('请至少选择一个标签')
    }
    this.$store.commit('createRecord',this.record)
    this.record.notes=''
  }


};

</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.notes {
  padding: 12px 0;
}

</style>

