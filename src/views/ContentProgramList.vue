<template>
  <div>
    <h1>ContentProgram</h1>
    <ul>
      <li v-for="(item,id) in list" :key="id">
        <router-link :to="`program/${item.id}`">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import program from "@/api/program.js";

export default {
  computed: {
    list: () => program.find_all()
  }
};
</script>

<style>
</style>