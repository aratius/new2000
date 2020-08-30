<template>
  <div id="program-item-wrapper">
    <h2>{{item.nameToShow}}</h2>
    <img v-if="item.id == 1" :id="`program-item-${item.id}`" :src="imgSrc" alt />
    <video v-else :id="`program-item-${item.id}`" :src="imgSrc" controls></video>
    <p class="introduce">
      {{item.introduce}}
      <span v-if="item.link">
        <a href="http://aratius.site/zoomattender">aratius.site/zoomattender</a>
      </span>
    </p>
  </div>
</template>

<script>
import program from "@/api/program.js";
export default {
  props: { id: Number },
  data() {
    return {
      item: null,
      imgPath: [
        //この画像指定の方法あんまり良くない
        require("@/assets/img/program/1.png"),
        require("@/assets/img/program/battle.mp4"),
        require("@/assets/img/program/leap.mp4"),
        require("@/assets/img/program/hokuyo.mp4")
      ]
    };
  },
  mounted() {},
  watch: {
    id: {
      handler() {
        this.item = program.find(this.id);
      },
      immediate: true
    }
  },
  computed: {
    imgSrc: function() {
      return this.imgPath[this.id - 1];
    }
  }
};
</script>

<style>
#program-item-wrapper {
  margin-bottom: 15vh;
}

#program-item-1 {
  width: 80%;
  max-width: 600px;
  border: 3px solid rgb(24, 22, 22);
}
#program-item-2 {
  width: 80%;
  border: 3px solid rgb(24, 22, 22);
}
#program-item-3 {
  width: 80%;
  border: 3px solid rgb(24, 22, 22);
}
#program-item-4 {
  height: 70vh;
  border: 3px solid rgb(24, 22, 22);
}

.introduce {
  width: 80%;
  margin: 10px auto;
  font-family: "Roboto Mono", monospace;
  font-weight: 1000;
}
</style>