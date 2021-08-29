<template>
  <div>
    <ul class="types">
      <li :class="type === '+'&& 'selected'" @click="selectType('+')">收入</li>
      <li :class="type === '-'&& 'selected'" @click="selectType('-')">支出</li>
    </ul>
  </div>

</template>

<script >
export default {
  name: 'Types',
  data (){
    return {
      type:"+"//"+"代表收入,"-"代表支出
    }
  },
  methods:{
    selectType(type){//type 只能是"+","-"中的一个
      if(type !== '+' && type !=="-"){
        throw new Error("type is unknown")
      }
      this.type=type;
    }
  }
};
</script>

<style lang="scss" scoped>
.types {
  display: flex;
  height: 64px;
  background: #c4c4c4;
  font-size: 24px;
  > li {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      background: black;
      height: 3px;
      width: 100%;
    }
  }
}

</style>