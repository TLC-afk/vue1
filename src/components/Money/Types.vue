<template>
  <div>
    <ul class="types">
      <li class="selected">收入</li>
      <li>支出</li>
    </ul>
  </div>

</template>

<script lang="ts">
export default {
  name: 'Types'
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