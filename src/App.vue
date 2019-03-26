<template>
  <div id="app">
    <div id="navigation">
      <router-link to="home">Home</router-link>
      <router-link to="instructions">Instructions</router-link>
      <router-link to="contact">Contact</router-link>
    </div>
    <header>
      <h1>Sky pet</h1>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Dancing+Script|Indie+Flower");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: center;
  align-content: center;
  align-items: center;
}

* {
  padding: 5px;
  font-family: "Indie Flower", cursive;
  font-family: "Dancing Script", cursive;
  text-align: center;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  display: grid;
  background-color: black;
  background-image: url("https://i.imgur.com/5RoPD1Z.jpg");
  background-size: cover;
  height: 1000px;
  z-index: 0;
}

header {
  font-size: 4vw;
  line-height: 0%;
  margin: 0px;
  padding: 0px;
  color: black;
}

footer > h2 {
  color: rgb(255, 255, 181);
}

#home {
  text-align: center;
}

#home > img {
  width: 500px;
  height: 400px;
  /* border: 5px rgb(46, 46, 46) dotted; */
  box-shadow: 800px 1200px #555;
  box-shadow: 5px 5px 5px black;
  padding: 0px;
  text-align: center;
}

#forms {
  display: inline-block;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 20px;
}

#fbutton {
  
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  padding: 5px 15px;
  border: 0 none;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 50px;
  width: 20vw;
  max-width: 25vw;
  height: 20vh;
  max-height: 30vw;
  border: 4px darkgrey solid;
  border-radius: 15px;
  color: black;
  background: url("https://i.pinimg.com/originals/73/f0/7a/73f07a3b375055159210d24ffd44e9ec.jpg");
}

#wbutton {
  
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  padding: 5px 15px;
  border: 0 none;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 50px;
  width: 20vw;
  max-width: 25vw;
  height: 20vh;
  max-height: 30vw;
  border: 4px darkgrey solid;
  border-radius: 15px;
  color: black;
  background: url("https://i.pinimg.com/originals/73/f0/7a/73f07a3b375055159210d24ffd44e9ec.jpg");
}

.content {
  display: grid;
  text-align: center;
  align-content: center;
  align-items: center;
}

#navigation > a {
  text-decoration: none;
  color: black;
}

#navigation a:hover {
  display: flexbox;
  color: grey;
  transition: 500ms;
  align-content: space-between;
}

#navigation {
  font-size: 5vw;
  text-decoration: none;
}

/*
.button {
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #00e5ed;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
}

.button:hover, .button:focus {
    background: #242424;
}

.button:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
}

.button:active {
    transform: scale(0.99);
}

.buttonselector > button {
    cursor: pointer;
} */
</style>
