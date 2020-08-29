<template>
  <div>
    <h1>ContentDrawing</h1>
    <ul>
      <li v-for="(item,id) in list" :key="id">
        <router-link :to="`drawing/${item.id}`">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import drawing from "@/api/drawing.js";

export default {
  computed: {
    list: () => drawing.find_all()
  }
};
</script>

<style>
</style>