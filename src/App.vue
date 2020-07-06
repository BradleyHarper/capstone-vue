<template xmlns="http://www.w3.org/1999/html">
  <div id="app">
    <div id="navigation">
      <router-link to="/">Home</router-link>
      <router-link to="instructions">Instructions</router-link>
      <router-link to="contact">Contact</router-link>
    </div>
    <header>
      <h1>Sky pet</h1>
    </header>
      <router-view/>
    <footer>
        <a>Please, if you have any questions please feel free to contact me or visit the community forum!</a>
    </footer>
  </div>
</template>

<script>
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Dancing+Script|Indie+Flower");
@import url("https://cdnjs.cloudflare.com/ajax/libs/animateCSS/1.2.2/jquery.animatecss.js");

:root {
  --border-size: 2px;
  --font-size-titles: 25px;
}

* {
  font-family: "Dancing Script", cursive;
  text-align: center;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  margin: 0;
  padding: 0;
  background-color: whitesmoke;
}

header {
  font-size: 4vw;
  line-height: 0;
  margin: 0;
  padding: 0;
  color: rgb(0, 0, 0);
}

footer {
  color: black;
  border-top: solid black var(--border-size);
  background-color: rgba(255, 228, 196, 0.8);
}

footer > a {
  font-size: var(--font-size-titles);
}

#navigation > a {
  font-size: var(--font-size-titles);
  text-decoration: none;
  color: black;
}

#navigation > a:hover {
  color: grey;
  align-content: space-between;
  opacity: 80%;
}

#navigation {
  display: flex;
  justify-content: space-around;
  color: rgb(109, 109, 109);
  border-bottom: solid black 2px;
  background-color: rgba(255, 228, 196, 0.8);
}
</style>
