<template>
  <div>
    <ContentTemplate subtitle="Contact"></ContentTemplate>
    <div class="link">
      <a href="mailto:info@aratius.site">info@aratius.site</a>
    </div>
    <div class="link">
      <a href="https://twitter.com/aualrxse">twitter</a>
    </div>
    <div class="link">
      <a href="https://www.instagram.com/aualrxse/">instagram</a>
    </div>
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
.link {
  width: 50%;
  min-width: 300px;
  height: 10vh;
  margin: 5vh auto;
  border: 3px solid #eaeaea;
}

.link a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #141413e6;
  text-decoration: none;
  font-size: 30px;
}

a:link,
a:visited,
a:hover,
a:active {
  color: #eaeaea;
}

.link a:hover {
  background-color: #eaeaeae6;
  color: #131312;
}
</style>