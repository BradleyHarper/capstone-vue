<template xmlns="http://www.w3.org/1999/html">
  <div id="app">
    <div id="navigation">
      <router-link to="/">Home</router-link>
      <router-link to="instructions">Instructions</router-link>
      <router-link to="contact">Contact</router-link>
    </div>
      <router-view/>
    <footer>
        <a>Please, if you have any questions please feel free to contact me or visit the community forum!</a>
    </footer>
  </div>
</template>

<script>
</script>

<style>
:root {
  --border-size: 2px;
  --font-size-titles: 25px;
  --background-color: rgba(255, 228, 196, 0.2);
}

* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

html {
  margin: 0;
  padding: 0;
  background: rgb(131,58,180);
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
}

#app {
  display: flex;
  flex-direction: column;
  text-align: center;
}

header {
  font-size: 4vw;
  line-height: 0;
  margin: 0;
  padding: 0;
  color: rgb(0, 0, 0);
}

footer {
  bottom: 0;
  color: black;
  background-color: var(--background-color);
}

footer > a {
  font-size: var(--font-size-titles);
}

#navigation > a {
  font-size: var(--font-size-titles);
  text-decoration: none;
  color: black;
}

#navigation {
  display: flex;
  justify-content: space-around;
  color: rgb(109, 109, 109);
  background-color: var(--background-color);
}
</style>
