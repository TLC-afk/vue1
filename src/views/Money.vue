<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateMount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem @update:value="onUpdateNotes"
                file-name="备注"
                place-holder="在这里添加备注"

      />
    </div>
    <Tags />
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';



@Component({
  components: {Tags, FormItem, Types, NumberPad},
})

export default class Money extends Vue {
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
    this.$store.commit('createRecord',this.record)

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

