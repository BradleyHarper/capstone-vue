<template>
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
      <div>
        <h2>Please, if you have any questions please feel free to contact me or visit the community forum!</h2>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Dancing+Script|Indie+Flower");
@import url("https://cdnjs.cloudflare.com/ajax/libs/animateCSS/1.2.2/jquery.animatecss.js");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  align-content: center;
  align-items: center;
}

* {
  font-family: "Dancing Script", cursive;
  text-align: center;
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

p {
  color: whitesmoke;
}

footer {
  color: black;
  border: solid black 5px;
  background-color: rgba(255, 228, 196, 0.8);
}

#app > div > h1 {
  position: relative;
}

#navigation > a {
  text-decoration: none;
  color: black;
}

#navigation a:hover {
  color: grey;
  transition: 500ms;
  align-content: space-between;
  opacity: 50%;
}

#navigation {
  display: flex;
  justify-content: space-around;
  top: 0;
  position: sticky;
  font-size: 5vw;
  text-decoration: none;
  color: rgb(109, 109, 109);
  border: solid black 5px;
  background-color: rgba(255, 228, 196, 0.8);
}
</style>
