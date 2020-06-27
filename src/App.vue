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
  text-align: center;
  align-content: center;
  align-items: center;
}

* {
  font-family: "Indie Flower", cursive;
  font-family: "Dancing Script", cursive;
  text-align: center;
}

html {
  margin: 0;
  padding: 0;
  display: grid;
  background-color: whitesmoke;
  /*background-image: url("https://i.imgur.com/5RoPD1Z.jpg");*/
  background-size: cover;
  z-index: 0;
}

header {
  font-size: 4vw;
  line-height: 0%;
  margin: 0px;
  padding: 0px;
  color: rgb(0, 0, 0);
}

p {
  color: whitesmoke;
}

footer {
  color: black;
  border: solid black 5px;
  background-color: rgb(255, 228, 196);
}

#app > div > h1 {
  position: relative;
}

#home > img {
  width: 500px;
  height: 400px;
  /* border: 5px rgb(46, 46, 46) dotted; */
  box-shadow: 800px 1200px #555;
  box-shadow: 5px 5px 5px black;
  padding: 0px;
  text-align: center;
  background-color: gray;
}

#home > h2 {
  color: bisque;
  border: 3px solid rgba(255, 228, 196, 0.8);
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 5px;
  margin-bottom: 10px;
}

#forms {
  display: inline-block;
  display: flex;
  text-align: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 10px;
}

#fbutton,
#wbutton,
#lightOffButton,
#lightOnButton {
  text-align: center;
  min-width: 150px;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  padding: 5px 15px;
  border: 0 none;
  -webkit-border-radius: 5px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 50px;
  width: 20vw;
  max-width: 25vw;
  height: 20vh;
  max-height: 30vw;
  border: 5px black solid;
  color: black;
  /*background: url("https://i.pinimg.com/originals/73/f0/7a/73f07a3b375055159210d24ffd44e9ec.jpg");*/
  outline: black;
}

#lightbulb {
  padding: 10px;
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
