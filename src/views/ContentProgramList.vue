<template>
  <div>
    <ContentTemplate subtitle="Program"></ContentTemplate>
    <h2 class="gallery">Gallery</h2>
    <div id="program-item-container">
      <div :id="`img-${item.name}`" v-for="(item,key) in list" :key="key">
        <router-link :to="`program/${item.id}`">
          <img :src="imgPath[item.id-1]" alt />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ContentTemplate from "@/components/ContentTemplate.vue";
import program from "@/api/program.js";

export default {
  components: {
    ContentTemplate
  },
  data() {
    return {
      imgPath: [
        //この画像指定の方法あんまり良くない
        require("@/assets/img/program/1.png"),
        require("@/assets/img/program/2.png"),
        require("@/assets/img/program/3.png"),
        require("@/assets/img/program/4.png")
      ]
    };
  },
  computed: {
    list: () => program.find_all()
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
  display: grid;
  grid-template-rows: 50px 50px 50px 50px 50px 50px 50px 50px 50px;
  grid-template-columns: 15% 30% 50px 30% 15%;
}

a img {
  width: 100%; /* ADD */
  height: 100%; /* ADD */
  border: 3px solid #1a1818;
  border-radius: 10%;
  object-fit: cover;
}

a img:hover {
  /* transition: 0.5s; */
  border: 3px solid #871e00;
}

#img-zoomattender {
  grid-row: 1 /6;
  grid-column: 2 / 3;
}

#img-battle {
  grid-row: 1 / 3;
  grid-column: 4 / 5;
}

#img-leap {
  grid-row: 7 / 9;
  grid-column: 2 / 3;
}

#img-hokuyo {
  grid-row: 4 / 9;
  grid-column: 4 / 5;
}
</style>