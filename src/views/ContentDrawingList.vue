<template>
  <div>
    <ContentTemplate subtitle="Program"></ContentTemplate>
    <h2 class="gallery">Gallery</h2>
    <div id="program-item-container">
      <div :id="`img-${item.name}`" v-for="(item,key) in list" :key="key">
        <a :href="item.link">
          <img :src="imgPath[item.id-1]" alt />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ContentTemplate from "@/components/ContentTemplate.vue";
import drawing from "@/api/drawing.js";

export default {
  components: {
    ContentTemplate
  },
  data() {
    return {
      imgPath: [
        //この画像指定の方法あんまり良くない
        require("@/assets/img/drawing/draw1.jpg"),
        require("@/assets/img/drawing/draw2.jpg"),
        require("@/assets/img/drawing/draw3.jpg"),
        require("@/assets/img/drawing/draw4.jpg")
      ]
    };
  },
  computed: {
    list: () => drawing.find_all()
  }
};
</script>

<style>
.gallery {
  margin-top: 0;
  margin-bottom: 20px;
}

#program-item-container {
  width: 100%;
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
}

img {
  width: 200px;
  height: 130px;
  border: 3px solid #1a1818;
  border-radius: 10%;
  object-fit: cover;
  margin: 10% auto;
}

img:hover {
  /* transition: 0.5s; */
  border: 3px solid #871e00;
}
</style>