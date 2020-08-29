<template>
  <div>
    <h1>ContentDrawing</h1>
    <p>content{{id}}</p>
    <table v-if="item" key="drawing">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>introduce</th>
      </tr>
      <tr>
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.introduce}}</td>
      </tr>
    </table>
    <div v-else key="loading">loading now</div>
  </div>
</template>

<script>
import drawing from "@/api/drawing.js";
export default {
  props: { id: Number },
  data() {
    return {
      item: null
    };
  },
  mounted() {},
  watch: {
    id: {
      handler() {
        this.item = drawing.find(this.id);
      },
      immediate: true
    }
  }
};
</script>

<style>
</style>