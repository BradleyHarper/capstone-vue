<template>
  <div id="home" class="page">
    <div id="image"></div>
    <img
      src="http://71.11.135.22:8081/"
      alt="Looks like the camera feed did not make it to the website! This is where your webcam footage should be. Make sure to refer to your user manual for proper device setup!"
    >
    <div id="feed-buttons">
      <input id="wbutton" type="button" value="Water">
      <input id="fbutton" type="button" value="Feed">
    </div>
    <div id="lightbulb">
      <input id="lightOnButton" type="submit" value="On">
      <input id="lightOffButton" type="submit" value="Off">
    </div>
  </div>
</template>

<script>
window.onload = function() {
  const food = document.getElementById("fbutton");
  const water = document.getElementById("wbutton");
  const ledOn = document.getElementById("lightOnButton");
  const ledOff = document.getElementById("lightOffButton");

  const options = {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    mode: "no-cors"
  };

  food.addEventListener("click", function feedReq() {
    fetch("http://71.11.135.22:3000/api/servo2/sml", options).then(Response => Response.ok);
  });

  water.addEventListener("click", function waterReq() {
    fetch("http://71.11.135.22:3000/api/servo/sml", options).then(Response => Response.ok);
  });

  ledOn.addEventListener("click", function ledOnReq() {
    fetch("http://71.11.135.22:3000/api/led/on", options).then(Response => Response.json);
  });

  ledOff.addEventListener("click", function ledOffReq() {
    fetch("http://71.11.135.22:3000/api/led/off", options).then(Response => Response.json);
  });
};
</script>

<style>

#fbutton, #wbutton, #lightOffButton, #lightOnButton {
  text-align: center;
  min-width: 150px;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 15px;
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
#feed-buttons {
  display: flex;
  justify-content: space-around;
}

#home > h2 {
  color: bisque;
  border: 3px solid rgba(255, 228, 196, 0.8);
  margin: 5px 50px 10px;
}

#home > img {
  width: 500px;
  height: 400px;
  padding: 0px;
  text-align: center;
  background-color: gray;
}

#lightbulb {
  display: flex;
  justify-content: space-around;
}

#home > img {
  font-size: 3vh;
  background-color: rgba(255, 228, 196, 0.8);;
  text-decoration: none;
  border-radius: 4px;
}
</style>
