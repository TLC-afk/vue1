<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="outputContent">1</button>
      <button @click="outputContent">2</button>
      <button @click="outputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="outputContent">4</button>
      <button @click="outputContent">5</button>
      <button @click="outputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="outputContent">7</button>
      <button @click="outputContent">8</button>
      <button @click="outputContent">9</button>
      <button class="ok" @click="ok">OK</button>
      <button class="zero" @click="outputContent">0</button>
      <button @click="outputContent">.</button>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  output: string = '0';

  outputContent(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement);
    const input = button.textContent as string;
    if (this.output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf('.') >= 0) {
      if (input === '.') {return;}
    }
    this.output += input;
  }

  remove() {
    if(this.output.length !== 1){
      this.output = this.output.slice(0, -1);
    }else{
      this.output = '0'
    }
  }

  clear() {
    this.output = '0'
  }

  ok() {
    this.$emit("update:value",this.output)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {
  .output {
    font-family: Consolas, monospace;
    font-size: 36px;
    padding: 9px 0;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px fade-out(black, 0.6), inset 0 5px 5px -5px fade-out(black, 0.6);
    min-height: 72px;
  }

  .buttons {
    @extend %clearfix;

    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 4*2%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($bg, 4*3%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($bg, 4*4%);
      }

      &:nth-child(14) {
        background: darken($bg, 4*5%);
      }

      &.ok {
        background: darken($bg, 4*6%);
      }
    }

    > .ok {
      height: 128px;
      float: right;
    }

    > .zero {
      width: 25*2%;
    }
  }
}

</style>