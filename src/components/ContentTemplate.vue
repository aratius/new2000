<template>
  <div id="template-wrapper">
    <h1>{{subtitle}}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    subtitle: String
  }
};
</script>

<style>
#template-wrapper {
  width: 100%;
  text-align: center;
}
h1 {
  font-size: 300px;
  color: rgba(200, 200, 200, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  pointer-events: none;
}
</style>