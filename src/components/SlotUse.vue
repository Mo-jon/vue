<template>
  <div style="background: green">
    <h1>slot使用</h1>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer" v-bind:scope="scope"></slot>
  </div>
</template>

<script>
export default {
  name: "TextDocument",
  props: {
    scope: Object,
  },
};
</script>

<style>
</style>