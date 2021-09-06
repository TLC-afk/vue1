<template>
  <div>
    <label class="notes">
      <span class="name">{{this.fileName}}</span>
      <input type="text" :placeholder="this.placeHolder"
             v-model="value"
      >
    </label>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';
  @Watch("value")
    onValueChanged(value:string){
    this.$emit("update:value",value)
  }
  @Prop({default:true}) fileName!:string
  @Prop()placeHolder?:string
};
</script>

<style lang="scss" scoped>
.notes {
  background: #f5f5f5;
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
  }
}

</style>