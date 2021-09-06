<template>
  <div>
    <button class="button" >
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Button extends Vue {


}
</script>

<style lang="scss" scoped>
.button{
  background: #767676;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 0 16px;
  height:40px;
  &-wrapper{
    text-align: center;
    margin-top: 38px;
    padding: 16px;
  }
}
</style>