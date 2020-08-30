<template>
  <div id="app">
    <div id="top">
      <router-link to="/">new2000();</router-link>
    </div>
    <div id="box"></div>
    <router-view />
    <div id="nav">
      <div id="bottom">
        <router-link to="/contents/profile">profile</router-link>
        <router-link to="/contents/program">program</router-link>
        <router-link to="/contents/drawing">drawing</router-link>
        <router-link to="/contents/contact">contact</router-link>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Prompt", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eaeaea;
  margin: 0;
}

#top {
  font-weight: bold;
  color: #eaeaea;
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(23, 23, 23, 0.9);
}

#top:link,
a:visited,
a:hover,
a:active {
  color: #eaeaea;
}

#top a {
  text-decoration: none;
}

#box {
  height: 10vh;
}

#nav {
  align-items: center;
  margin-top: 20px;
}

#nav a {
  display: inline-block;
  width: 25%;
  height: 100%;
  font-weight: bold;
  color: #eaeaea;
  text-decoration: none;
  background-color: rgba(23, 23, 23, 0.95);
  padding-top: 2vh;
}

#nav a:hover {
  background-color: rgba(32, 32, 32, 0.95);
}

#bottom {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 5vh;
  position: fixed;
  bottom: 2vh;
  left: 0;
  right: 0;
}

#nav a.router-link-exact-active {
  color: #b90707;
  background-color: rgba(243, 243, 243, 0.95);
}
</style>
