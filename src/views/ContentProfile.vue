<template>
  <div id="profile-wrapper">
    <ContentTemplate subtitle="Profile" id="sub-title"></ContentTemplate>
    <!-- <img src="@/assets/img/me.png" alt="me" id="me-img" /> -->
    <h2>松本 新</h2>
    <h3>(Arata Matsumoto)</h3>
    <p>2000/11/29生（19歳）</p>
    <p>バックパッカー/フロントエンドエンジニア（勉強中）</p>
    <p>
      兵庫県在住の19歳。芸術大学在学中の現役バックパッカーです。
      <br />今年の春、ひとりでカンボジアに滞在していた際に、詐欺集団のアパートに軟禁され、現金約20万円を奪われるもゴキブリの如き生命力で奇跡的に逃げ延びました。周りからはこれで懲りたと思われているようですが、旅を辞めるつもりはさらさらありません。
    </p>
    <p>
      大学卒業後、フロントエンドエンジニアになることを目標に日々勉強に勤しんでいます。主な分野は、Vue.js、Three.js、TouchDesigner。
      <br />当サイトは、Vue.jsを用いたSPAとなっております。
    </p>
  </div>
</template>

<script>
import ContentTemplate from "@/components/ContentTemplate.vue";
export default {
  components: {
    ContentTemplate
  }
};
</script>

<style>
#sub-title {
  font-family: "Prompt", sans-serif;
}

#profile-wrapper {
  width: 80%;
  margin: auto;
  padding-bottom: 7vh;
  line-height: 1.8;
  font-family: "Roboto Mono", monospace;
  font-weight: 1000;
}

#me-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 100px;
  border: 3px solid white;
}
</style>